/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import { useDropzone } from "react-dropzone";
import Fab from "@material-ui/core/Fab";
import { Add, InsertPhoto } from "@material-ui/icons/";
import imageCompression from "browser-image-compression";
import React, { useState } from "react";
import useSessionStorage from "../hooks/storageHooks/useSessionStorage";
import "./profilePictureResize.css";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../hooks/storageHooks/useLocalStorage";

// all destructured props come from FormSignup component
export default function PictureCompress({ onFileSubmit, value }) {
  const [croppedImg] = useLocalStorage({}, "imgBase64Cropped");
  // Get some props from react-dropzone
  const { getRootProps, getInputProps } = useDropzone({
    noDrag: false,
    id: "file",
    type: "file",
    accept: "image/jpeg, image/png",
  });
  let history = useHistory();
  const [stateCompress, setStateCompress] = useSessionStorage(
    {},
    "imgBase64Compressed"
  );

  const [stateImg, setStateImg] = useState({
    maxWidthOrHeight: 1024,
    webWorker: {
      progress: null,
      inputSize: null,
      outputSize: null,
      inputUrl: null,
      outputUrl: null,
      base64: null,
    },
  });

  const onProgress = (p, useWebWorker) => {
    const targetName = useWebWorker ? "webWorker" : "";
    setStateImg((prevStateImg) => ({
      ...prevStateImg,
      [targetName]: {
        ...prevStateImg[targetName],
        progress: p,
      },
    }));
  };

  // Set reader and use croppedMod function for redirect to cropper tool
  const handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result;
    setStateCompress({ base64TextString: btoa(binaryString) });
    cropperMod();
  };

  function cropperMod() {
    return history.push("/cropper-modal");
  }

  async function compressImage(e, useWebWorker) {
    const file = e.target.files[0];

    console.log("input", file);
    console.log(
      "ExifOrientation",
      await imageCompression.getExifOrientation(file)
    );
    const targetName = useWebWorker ? "webWorker" : "";
    setStateImg((prevStateImg) => ({
      ...prevStateImg,
      [targetName]: {
        ...prevStateImg[targetName],
        inputSize: (file.size / 1024 / 1024).toFixed(2),
        inputUrl: URL.createObjectURL(file),
      },
    }));
    let options = {
      maxSizeMB: stateImg.maxSizeMB,
      maxWidthOrHeight: stateImg.maxWidthOrHeight,
      useWebWorker,
      onProgress: (p) => onProgress(p, useWebWorker),
    };
    const output = await imageCompression(file, options);
    console.log("output", output);
    setStateImg((prevStateImg) => ({
      ...prevStateImg,
      [targetName]: {
        ...prevStateImg[targetName],
        outputSize: (output.size / 1024 / 1024).toFixed(2),
        outputUrl: URL.createObjectURL(output),
      },
    }));
    const reader = new FileReader();
    reader.onload = handleReaderLoaded;
    reader.readAsBinaryString(output);
    setStateCompress((prevStateImg) => ({
      ...prevStateImg,
      [targetName]: {
        ...prevStateImg[targetName],
        outputSize: (output.size / 1024 / 1024).toFixed(2),
        outputUrl: URL.createObjectURL(output),
        base64: output.base64TextString,
      },
    }));
  }

  // const { webWorker } = stateImg

  return (
    <Fragment>
      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <Fab
            size="medium"
            aria-label="add"
            className="picture-compress__fabicon"
          >
            {!croppedImg.imageDestination ? <Add /> : <InsertPhoto />}
          </Fab>
          <form
            onSubmit={(e) => onFileSubmit(e)}
            onChange={(e) => compressImage(e, true)}
          >
            <input
              className="picture-compress__input"
              onChange={(e) => compressImage(e, true)}
              value={value}
              {...getInputProps()}
            />
          </form>
        </div>
      </section>
    </Fragment>
  );
}

<PictureCompress />;

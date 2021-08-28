import { createRef, Fragment, useEffect, useState } from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";
import "./pictureCropper.css";
import useLocalStorage from "../../hooks/storageHooks/useLocalStorage";
import useSessionStorage from "../../hooks/storageHooks/useSessionStorage";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const ImageCropper = (props) => {
  let history = useHistory();

  // Get compressed image from session Storage
  const [stateCompress] = useSessionStorage({}, "imgBase64Compressed");
  // set cropped image to local Storage
  // eslint-disable-next-line no-unused-vars
  const [croppedImg, setCroppedImg] = useLocalStorage(
    { imgDestination: "" },
    "imgBase64Cropped"
  );
  // Set state for stocking cropped image when the operation in on progress
  const [stateImg, setStateImg] = useState({
    imgaDestination: "",
  });
  // create ref with img
  let imageElement = createRef();

  useEffect(() => {
    // crooper function with some props
    const cropper = new Cropper(imageElement.current, {
      zoomable: false,
      scalable: false,
      aspectRatio: 1,
      crop: () => {
        const canvas = cropper.getCroppedCanvas();
        // send cropped img to state
        setStateImg({ imageDestination: canvas.toDataURL("image/*") });
        // Send cropped img to session storage
        setCroppedImg({ imageDestination: canvas.toDataURL("image/*") });
        return () => {
          // clean stateImg for optimisation
          setStateImg({});
        };
      },
    });
  }, [imageElement, setCroppedImg, stateImg]);

  return (
    <Fragment>
      <div>
        <div className="pictureCropper__img-container">
          <img
            ref={imageElement}
            src={"data:image/png;base64," + stateCompress.base64TextString}
            alt="Source"
            crossOrigin="true"
          />
        </div>
        <img
          src={stateImg.imageDestination}
          className="pictureCropper__img-preview"
          alt="Destination"
        />
      </div>
      <div>
        <Button
          variant="contained"
          className="pictureCropper__btn-imageEditor"
          style={{ marginTop: 15, color: "white" }}
          onClick={() => history.replace("/filters-tool")}
        >
          Add Filters
        </Button>
        <Button
          variant="contained"
          className="pictureCropper__btn-imageEditor"
          style={{ marginTop: 15, color: "white", marginLeft: 20 }}
          onClick={() => {
            history.push("/");
          }}
        >
          Finish
        </Button>
      </div>
    </Fragment>
  );
};

export default ImageCropper;

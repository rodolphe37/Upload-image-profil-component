import { useState } from "react";
import SidebarItem from "./SidebarItem";
import Slider from "./Slider";
import "./pictureFilters.css";
import useLocalStorage from "../../hooks/storageHooks/useLocalStorage";
import { Button } from "@material-ui/core";
import {
  Brightness5,
  Compare,
  Gradient,
  PhotoSizeSelectActual,
  ColorLens,
  InvertColors,
  Colorize,
} from "@material-ui/icons/";
import { useHistory } from "react-router-dom";

function PictureFilters() {
  // Set filter options in a array
  const DEFAULT_OPTIONS = [
    {
      name: "Brightness",
      icon: <Brightness5 />,
      property: "brightness",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Contrast",
      icon: <Compare />,
      property: "contrast",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Saturate",
      icon: <Colorize />,
      property: "saturate",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "GrayScale",
      icon: <Gradient />,
      property: "grayscale",
      value: 0,
      range: {
        min: 0,
        max: 100,
      },
      unit: "%",
    },
    {
      name: "Sepia",
      icon: <PhotoSizeSelectActual />,
      property: "sepia",
      value: 0,
      range: {
        min: 0,
        max: 100,
      },
      unit: "%",
    },
    {
      name: "Hue Rotate",
      icon: <ColorLens />,
      property: "hue-rotate",
      value: 0,
      range: {
        min: 0,
        max: 360,
      },
      unit: "deg",
    },
    {
      name: "Invert",
      icon: <InvertColors />,
      property: "invert",
      value: 0,
      range: {
        min: 0,
        max: 100,
      },
      unit: "%",
    },
  ];

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const selectedOption = options[selectedOptionIndex];
  // Get cropped image from localstorage
  const [croppedImg] = useLocalStorage({}, "imgBase64Cropped");
  // Post style to Local Storage
  // eslint-disable-next-line no-unused-vars
  const [ImageStyle, setImageStyle] = useLocalStorage({}, "styleImg");

  let history = useHistory();

  function handleSliderChange({ target }) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        return { ...option, value: target.value };
      });
    });
  }

  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(" ") };
  }

  const handleRedirect = () => {
    setTimeout(() => {
      history.push("/");
    }, 1000);
  };

  return (
    <div className="pictureFilter__container">
      <div className="pictureFilter__mainImage">
        <img
          style={getImageStyle()}
          className="pictureFilter__mainImage__picture"
          src={croppedImg.imageDestination}
          alt="profil"
        />
      </div>
      <h3 style={{ marginLeft: 4 }}>{selectedOption.name}</h3>
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}
        style={{ marginLeft: -15 }}
      />

      <div className="pictureFilter__sidebar">
        {options.map((option, index) => (
          <SidebarItem
            key={index}
            name={option.name}
            icon={option.icon}
            active={index === selectedOptionIndex}
            handleClick={() => setSelectedOptionIndex(index)}
          />
        ))}
      </div>

      <Button
        className="btn-imageEditor"
        variant="contained"
        onClick={() => {
          setImageStyle(getImageStyle());
          handleRedirect();
        }}
      >
        Finish
      </Button>
    </div>
  );
}

export default PictureFilters;

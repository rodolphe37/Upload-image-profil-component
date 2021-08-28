import React, { useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import PictureFilters from "./pictureFilters/PictureFilters";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./profilePictureResize.css";

function getModalStyle() {
  const top = 47;
  const left = 48;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function ModalFilters({ setOnStudio }) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(true);
  // let history = useHistory();

  const handleClose = () => {
    setOpen(false);
    return window.location.replace("/");
  };

  // Custom message for toast notification
  const Msg = () => (
    <div>
      <b style={{ color: "black" }}>
        Confirm your changes by clicking on Finish
      </b>
    </div>
  );
  // Function for displaying notification to screen
  useEffect(() => {
    const displayMsg = () => {
      toast(<Msg />);
    };
    displayMsg();
  }, []);

  // Boby of the modal content
  const body = (
    <div style={modalStyle} className="paper modal-414">
      <PictureFilters setOnStudio={setOnStudio} />
    </div>
  );

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={15000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

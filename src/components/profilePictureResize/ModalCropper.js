import { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import PictureCropper from "./pictureCropper/PictureCropper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useHistory } from "react-router-dom";

function ModalCropper({ onStudio, setOnStudio }) {
  const [open, setOpen] = useState(true);
  let history = useHistory();

  // Custom message for toast notification
  const Msg = () => (
    <div>
      <b style={{ color: "black" }}>
        You can add filters or end the operation by clicking on finish
      </b>
    </div>
  );
  // Function for displaying notification to screen
  useEffect(() => {
    const displayMsg = () => {
      toast(<Msg />);
    };
    if (onStudio === false) {
      setOnStudio(true);
    }
    displayMsg();
  }, [onStudio, setOnStudio]);

  return (
    <div>
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
          classNames="cropper-modal"
          open={open}
          onClose={() => {
            setOpen(false);
            history.push("/filters-tool");
          }}
          center
        >
          <PictureCropper />
        </Modal>
      </div>
    </div>
  );
}

export default ModalCropper;

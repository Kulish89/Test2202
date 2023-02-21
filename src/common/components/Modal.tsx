import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import s from "./Modal.module.css";
import arrowRight from "../../assets/icons/arrow-right.svg";
import cancelCross from "../../assets/icons/cancel-cross.svg";
import IconButton from "@mui/material/IconButton";

type ModalWindowPropsType = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};
export function ModalWindow(props: ModalWindowPropsType) {
  return (
    <div>
      <button className={s.form_button} type="submit">
        <img src={arrowRight} alt="" />
      </button>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ transition: "0.5s" }}
      >
        <Box className={s.modal}>
          <IconButton
            onClick={props.handleClose}
            sx={{ alignSelf: "flex-end" }}
          >
            <img src={cancelCross} alt="" />
          </IconButton>
          <h6 className={s.modal_title}>success!</h6>
          <p className={s.modal_subtitle}>
            You have successfully subscribed to the email newsletter
          </p>
          <button onClick={props.handleClose} className={s.modal_closeButton}>
            Close
          </button>
        </Box>
      </Modal>
    </div>
  );
}

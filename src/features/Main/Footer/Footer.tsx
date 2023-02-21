import React, { useState } from "react";
import { useFormik } from "formik";
import s from "./Footer.module.css";
import emailjs from "emailjs-com";
import { ModalWindow } from "../../../common/components/Modal";

export const Footer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    validate: (values) => {
      const errors: any = {};
      if (!values.email) {
        errors.email = "Please enter your email";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      // setIsSending(true);
      emailjs
        .send(
          "service_r6ht33q",
          "template_8byjsdo",
          values,
          "YWy8zsG0i5jr2R-VT"
        )
        .then((res) => {
          formik.resetForm();
          handleOpen();
        })
        .catch((error) => {
          console.log("Error! Please try again later!");
        });
    },
  });
  return (
    <footer className={s.footer}>
      <form
        className={
          formik.errors.email && formik.touched.email
            ? s.footer_form + " " + s.errorForm
            : s.footer_form
        }
        onSubmit={formik.handleSubmit}
      >
        <input
          className={s.form_input}
          placeholder="Enter your Email and get notified"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? (
          <p className={s.error_message}>{formik.errors.email}</p>
        ) : null}
        {/* <button className={s.form_button} type="submit">
          <img src={arrowRight} alt="" />
        </button> */}
        <ModalWindow
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />
      </form>
    </footer>
  );
};

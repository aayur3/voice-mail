import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";  
import { db } from "./firebase";
import firebase from "firebase/compat/app";

function SendMail() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });


    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
  type="email"
  placeholder="To"
  className="sendMail__to"
  {...register("to", { required: true })}
/>
<div className="sendMail__error">
  {errors.to && "To is required"}
</div>

<input
  type="text"
  placeholder="Subject"
  className="sendMail__subject"
  {...register("subject", { required: true })}
/>
<div className="sendMail__error">
  {errors.subject && "Subject is required"}
</div>

<textarea
  placeholder="Message..."
  className="sendMail__message"
  {...register("message", { required: true })}
/>
<div className="sendMail__error">
  {errors.message && "Message is required"}
</div>

        <div className="sendMail__options">
          <Button
            className="sendMail__sendButton"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
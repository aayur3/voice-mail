import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectMail } from "./features/mailSlice";
import './EmailRow.css'; // Assuming you have a CSS file for styling
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import StarBorderOutlined from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlined from "@mui/icons-material/LabelImportantOutlined";

function EmailRow({ title, subject, description, time }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
      dispatch(selectMail({ title, subject, description, time }));
      navigate(`/mail`);
    };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options"> 
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div> 

      <h3 className="emailRow__title">{title} </h3>

      <div className="emailRow__message">
        <h4>
            {subject}{"  "}
            <span className="emailRow__description">-
                {description}
            </span>
        </h4>
      </div>

      <p className="emailRow__time">{time}</p>

    

    </div>
  );
}

export default EmailRow;

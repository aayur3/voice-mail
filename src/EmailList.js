import React, { useEffect, useState } from "react";
import './EmailList.css'; // Assuming you have a CSS file for styling  
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People"
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Section from "./Section"; // Importing the Section component
import { ArrowDropDown} from "@mui/icons-material";
import EmailRow from "./EmailRow";
import { db } from "./firebase"; // Importing the Firestore database instance

function EmailList() {

  const [emails, setEmails] = React.useState([]);

  useEffect(() => {
    db.collection("emails").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      setEmails(snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })));
    });
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
            <Checkbox />

            <IconButton>
               <ArrowDropDown />
            </IconButton>

            <IconButton>
              <RedoIcon />
            </IconButton>

            <IconButton>
              <MoreVertIcon />
            </IconButton>
        </div>

        <div className="emailList__settingsRight">
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>

            <IconButton>
              <ChevronRightIcon />
            </IconButton>

            <IconButton>
              <KeyboardHideIcon />
            </IconButton>

            <IconButton>
              <SettingsIcon />
            </IconButton>
          </div>
      </div>
      
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1a73e8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
       
      </div>

      <div className="emailList__list">
        {emails.map(({id, to, subject, message, timestamp}) => (
          <EmailRow 
            key={id}
            id={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          />
        ))}

         {/* Example static EmailRow */}
        <EmailRow
          title="Sample Title"
          subject="Sample Subject"
          description="Sample description."
          time="10:00 AM"
        />
      </div>
    </div>
  );
}

export default EmailList;

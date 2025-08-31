import React from "react";
import './Header.css'; // Assuming you have a CSS file for styling
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice"
import { useDispatch } from 'react-redux';
import { auth } from "./firebase";
import { logout } from './features/userSlice';


function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="app-header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="" />
      </div>


      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown className="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        
        <IconButton>
            <NotificationsIcon />
        </IconButton>

       <Avatar onClick={signOut} src={user?.photoUrl} />
      </div>

    </div>
  );
}

export default Header;

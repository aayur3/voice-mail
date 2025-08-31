import React from 'react';
import  "./Login.css";
import { Button } from '@mui/material';
import { auth, Provider } from "./firebase";
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { useNavigate } from "react-router-dom";


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signIn = () => {
        auth.signInWithPopup(Provider).then(({ user }) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }));
            navigate('/');
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__container">

                <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
          alt="Gmail logo"
        />
                <Button onClick={signIn} type="submit">Login</Button>
                
            </div>
        </div>
    );
}

export default Login;
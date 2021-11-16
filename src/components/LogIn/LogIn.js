import React from "react";
// import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./LogIn.css";
import loginImg from '../../img/login.png'

const LogIn = () => {
    const { setIsLoading, signInUsingGoogle } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || "/";

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="login">
           
            <button onClick={handleGoogleSignIn}>
                <img src={loginImg} alt="" />
                <h4 className="text-info fw-bold">Sign in</h4>
            </button>
        </div>
    );
};

export default LogIn;

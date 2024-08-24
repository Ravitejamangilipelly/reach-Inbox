import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import './index.css';

const LoginPage = () => {
    const navigate = useNavigate();

    const googleLogin = useGoogleLogin({
        onSuccess: tokenResponse => {
            localStorage.setItem('token', tokenResponse.access_token);
            navigate('/onebox');
        },
        onError: errorResponse => {
            console.error('Login Failed:', errorResponse);
        },
    });

    return (
        <div className="login-page">
            <h1>Login</h1>
            <button onClick={() => googleLogin()}>Login with Google</button>
        </div>
    );
};

export default LoginPage;

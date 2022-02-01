import './style.css';
import React, { useEffect, useState } from "react";

const Login = () => {
    const USERNAME_KEY = "username";

    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(true);

    const [savedName,setSavedName] = useState('');

    const onChangeName = (e) => {
        setUserName(e.target.value);
    }

    const onLoginSubmit = () => {
        if(userName === ''){

        } else {
            setShow((s) => !s);
        }
    }


    return (
        <div>
            <div style={{display: show? "block" : "none"}}>
                <input onChange={onChangeName} value={userName} type="text" placeholder="What is your name?" />
                <button type='button' onClick={onLoginSubmit}>Log In</button>
            </div>
            <h1 className='greeting' style={{display: show? "none" : "block"}}>Hello {userName}</h1>
        </div>
    );
}

export default Login;

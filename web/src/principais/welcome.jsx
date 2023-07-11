import React, { useState } from "react";
import Login from "./login";
import SignIn from "./signin";
import Home from "./home";
import Start from "./start";

export default function Welcome() {
    const [username, setUsername] = useState('');

    const handleLogin = (username) => {
        setUsername(username);
    };

    const [navs, setNavs] = useState({
        Start: true,
        Login: false,
        SignIn: false,
        Home: false,
    })

    const handleShow = (nav) => {
        const newNavs = { ...navs }

        Object.keys(newNavs).forEach((key) => {
            newNavs[key] = key === nav;
        })
        setNavs(newNavs)
    }

    return (
        <>
            {Object.entries(navs).map(([nav, show]) =>
                show && (
                    <React.Fragment key={nav}>
                        {nav === 'Start' && <Start handleShow={handleShow} />}
                        {nav === 'Login' && <Login handleShow={handleShow} handleLogin={handleLogin}/>}
                        {nav === 'SignIn' && <SignIn handleShow={handleShow} handleLogin={handleLogin}/>}
                        {nav === 'Home' && <Home handleShow2={handleShow} username={username}/>}
                    </React.Fragment>
                )
            )}
        </>
    )
}
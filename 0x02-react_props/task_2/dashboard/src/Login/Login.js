import React from "react";
import './Login.css';


function Login() {
    return (
        <React.Fragment>
            <p>Login to access the full dashboard</p>
            <form>
                <label htmlFor="email">Email:</label>
                <input type='text' id="email"></input>
                <label htmlFor="password">Password:</label>
                <input type='password' id="password"></input>
                <button>OK</button>
            </form>
        </React.Fragment>
    )
}

export default Login;
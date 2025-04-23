import React from 'react'

import './App.css'

function App() {
    const login = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/github";
    };

    const logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = "http://localhost:8080/logout";
    };

    return (
        <div style={{ padding: 40 }}>
            <h1>React Frontend</h1>
            <button onClick={login}>🔐 Login with GitHub</button>
            <button onClick={logout} style={{ marginLeft: 20 }}>🚪 Logout</button>
            <p><a href="http://localhost:8080/public">Test Public Endpoint</a></p>
            <p><a href="http://localhost:8080/success">Test Protected Endpoint</a></p>
        </div>
    );

}

export default App

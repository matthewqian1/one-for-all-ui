import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        navigate("/home");
      }

    return <div>
            <form onSubmit={login}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <input type="submit"/>
            </form>

    </div>
    
  }
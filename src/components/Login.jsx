import React, { useState, useContext } from 'react'; // Correct the import statement 
import UserContext from '../context/UserContext';

function Login(){
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password }); // Use setUser instead of setUsername
    };

    return (
        <div>
            <h2>Login</h2>
            <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
            />
            <input 
                type="password" // Using password type for the password field
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;

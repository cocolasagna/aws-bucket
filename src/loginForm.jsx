import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);

    // Simulate login success
    setLoggedInUser(username);
  };

  return (
    <div style={{ maxWidth: 300, margin: '50px auto' }}>
      {!loggedInUser ? (
        <>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 10 }}>
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '100%', padding: 8 }}
                required
              />
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: 8 }}
                required
              />
            </div>
            <button type="submit" style={{ width: '100%', padding: 10 }}>
              Login
            </button>
          </form>
        </>
      ) : (
        <>
          <h2>Welcome, {loggedInUser}!</h2>
          <p>You have successfully logged in.</p>
        </>
      )}
    </div>
  );
}

export default LoginForm;

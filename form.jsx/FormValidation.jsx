import React, { useState } from 'react';
import './style.css';

const FormValidation = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const [errorusername, setErrorUserName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorpassword, setErrorPassword] = useState('');
  const [errorconfirmpassword, setErrorConfirmPassword] = useState('');

  const [usercolor, setUserColor] = useState('');
  const [emailcolor, setEmailColor] = useState('');
  const [passwordcolor, setPasswordColor] = useState('');
  const [confirmpasswordcolor, setConfirmPasswordColor] = useState('');

  const validate = (e) => {
    e.preventDefault(); // ✅ fixed spelling

    // Username validation
    if (username.length >= 8) {
      setErrorUserName('');
      setUserColor('green');
    } else {
      setErrorUserName('Username must be at least 8 letters long.');
      setUserColor('red');
    }

    // Email validation
    if (email.includes('@gmail.com')) {
      setErrorEmail('');
      setEmailColor('green');
    } else {
      setErrorEmail('Must include @gmail.com');
      setEmailColor('red');
    }

    // Password validation
    if (password.length >= 8) {
      setErrorPassword('');
      setPasswordColor('green');
    } else {
      setErrorPassword('Password should have at least 8 letters.');
      setPasswordColor('red');
    }

    // Confirm password validation
    if (password !== '' && password === confirmpassword) {
      setErrorConfirmPassword('');
      setConfirmPasswordColor('green');
    } else {
      setErrorConfirmPassword("Passwords didn't match");
      setConfirmPasswordColor('red');
    }
  };

  return (
    <>
      <div className="card-image"></div>

      <form>
        <input
          type="text"
          placeholder="Username"
          style={{ borderColor: usercolor }}
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <p className="error">{errorusername}</p>

        <input
          type="email"
          placeholder="Email"
          style={{ borderColor: emailcolor }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error">{errorEmail}</p>

        <input
          type="password"
          placeholder="Password"
          style={{ borderColor: passwordcolor }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error">{errorpassword}</p>

        <input
          type="password"
          placeholder="Confirm Password"
          style={{ borderColor: confirmpasswordcolor }}
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p className="error">{errorconfirmpassword}</p>

        <button className="submit-btn" onClick={validate}>
          Submit
        </button>
      </form>
    </>
  );
};

export default FormValidation;

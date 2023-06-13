import React, { useState } from 'react';
import CustomInput from './CustomInput';

const UserForm = (props) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [fnameError, setFnameError] = useState('');
  const [lnameError, setLnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [cpasswordError, setCPasswordError] = useState('');
  const [maskedPassword, setMaskedPassword] = useState('');
  const [maskedCPassword, setMaskedCPassword] = useState('');

  const maskPassword = (password) => {
    let maskedPassword = '';
    for (let i = 0; i < password.length; i++) {
      maskedPassword += '*';
    }
    return maskedPassword;
  };

  const handleFname = (e) => {
    const value = e.target.value;
    setFname(value);

    if (value.trim() === '') {
      setFnameError('First Name is required!');
    } else if (value.length < 2) {
      setFnameError('First Name must be 2 characters or longer!');
    } else {
      setFnameError('');
    }
  };

  const handleLname = (e) => {
    const value = e.target.value;
    setLname(value);

    if (value.trim() === '') {
      setLnameError('Last Name is required!');
    } else if (value.length < 2) {
      setLnameError('Last Name must be 2 characters or longer!');
    } else {
      setLnameError('');
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmailError('Email is required!');
    } else if (!validateEmail(e.target.value)) {
      setEmailError('Invalid email format!');
    } else {
      setEmailError('');
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setMaskedPassword(maskPassword(value));

    if (value.trim() === '') {
      setPasswordError('Password is required!');
    } else if (value.length < 8) {
      setPasswordError('Password must be 8 characters or longer!');
    } else {
      setPasswordError('');
    }
  };

  const handleCPassword = (e) => {
    const value = e.target.value;
    setCpassword(value);
    setMaskedCPassword(maskPassword(value));

    if (value.trim() === '') {
      setCPasswordError('Confirm Password is required!');
    } else if (value.length < 8) {
      setCPasswordError('Confirm Password must be 8 characters or longer!');
    } else if (value !== password) {
      setCPasswordError('Passwords must match');
    } else {
      setCPasswordError('');
    }
  };

  const createUser = (e) => {
    e.preventDefault();


    if (!fname || !lname || !email || !password || !cpassword) {
      return;
    }

    if (password !== cpassword) {
      return;
    }
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="form-container">
      <form onSubmit={createUser} className="form">
        <CustomInput
          label="First Name"
          handleInput={handleFname}
          value={fname}
        />
        {fnameError && <p style={{ color: 'red' }}>{fnameError}</p>}
        <CustomInput
          label="Last Name"
          handleInput={handleLname}
          value={lname}
        />
        {lnameError && <p style={{ color: 'red' }}>{lnameError}</p>}
        <CustomInput
          label="Email Address"
          handleInput={handleEmail}
          value={email}
        />
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        <CustomInput
          label="Password"
          handleInput={handlePassword}
          value={maskedPassword}
          type="password"
        />
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        <CustomInput
          label="Confirm Password"
          handleInput={handleCPassword}
          value={maskedCPassword}
          type="password"
        />
        {cpasswordError && <p style={{ color: 'red' }}>{cpasswordError}</p>}
        <input type="submit" value="Create User" />
      </form>
      <div className="form-data">
        <h2>Your Form Data</h2>
        <p>First Name: {fname}</p>
        <p>Last Name: {lname}</p>
        <p>Email: {email}</p>
        <p>Password: {maskedPassword}</p>
        <p>Confirm Password: {maskedCPassword}</p>
      </div>
    </div>
  );
};

export default UserForm;

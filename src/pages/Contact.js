import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers'

const styles = {
  message: {
    height: '211px',
  },
}

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!name && !email && !message) {
      setErrorMessage('Form cannot be left blank');
      return;
    }

    if (!name && !email) {
      setErrorMessage('Name and email cannot be left blank')
      return;
    }

    if (!name && !message) {
      setErrorMessage('Name and message cannot be left blank')
      return;
    }

    if (!email && !message) {
      setErrorMessage('Email and message cannot be left blank')
      return;
    }

    if (!name) {
      setErrorMessage('Name cannot be left blank')
      return;
    }

    // If email address is invalid, display error message
    if (!validateEmail(email) && !email) {
      setErrorMessage('Email cannot be left blank');
      return;
    }

    //If there is an email and the email is invalid
    if (!validateEmail(email) && email) {
      setErrorMessage('Email is invalid');
      return;
    }

    if (!message) {
      setErrorMessage('Message cannot be left blank');
      return;
    }

    //clears the input after successful submission
    setName('')
    setEmail('');
    setMessage('');
    setErrorMessage('');

    //TODO: create method to handle submitting message
  }

  return (
    <main className="p-3 mb-5">
      <h1 className="title">Contact</h1>
      <form className="form-box mb-3">
        <p className="mb-0">Name:</p>
        <input
          name="name"
          type="name"
          placeholder="John Doe"
          value={name}
          onChange={handleInputChange}
          className="w-25 mb-3 p-1"
        />
        <br />
        <p className="mb-0">Email Address:</p>
        <input
          name="email"
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={handleInputChange}
          className="w-25 mb-3 p-1"
        />
        <br />
        <p className="mb-0">Message: </p>
        <textarea
          name="message"
          type="message"
          placeholder="Description"
          value={message}
          onChange={handleInputChange}
          className="w-25 mb-3 p-2"
          style={styles.message}>
        </textarea>
        <div>
          <button
            type="button"
            className="btn btn-primary submitBtn fw-bold"
            onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </main>
  );
}

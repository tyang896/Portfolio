import React, {useState} from 'react';
import { validateEmail } from '../utils/helpers'


export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name'){
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if(!name){
      setErrorMessage('Name cannot be left blank')
      return;
    }

    // If email address is invalid, display error message
    if (!validateEmail(email)){
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
  }

  return (
    <main className="p-3">
      <h1 className="title">Contact</h1>
      <form className="form">
        <p>Name:</p>
        <input 
        name="name" 
        type="name" 
        placeholder="name"
        value={name}
        onChange={handleInputChange}
        />
        <br />
        <p>Email Address:</p>
        <input 
        name="email" 
        type="email"
        placeholder="email"
        value={email}
        onChange={handleInputChange}
         />
        <br />
        <p>Message: </p>
        <textarea 
        name="message" 
        type="message"
        placeholder="message"
        value={message}
        onChange={handleInputChange}>
        </textarea>
        <div>
          <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
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

//TODO: add functionality to contact section
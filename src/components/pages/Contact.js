import React from 'react';

export default function Contact() {
  return (
    <main className="p-3">
      <h1 className="title">Contact</h1>
      <form className="form">
        <p>Name:</p>
        <input name="name" type="name" />
        <br />
        <p>Email Address:</p>
        <input name="email" type="email" />
        <br />
        <p>Message: </p>
        <textarea name="message" type="message"></textarea>
        <div>
          <button type="button" className="btn btn-primary" onClick={""}>Submit</button>
        </div>
      </form>
    </main>
  );
}

//TODO: add functionality to contact section
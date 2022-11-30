import React from 'react';

export default function Resume() {
  return (
    <main className="p-3 resume">
      <h1 className="title">Resume</h1>
      <a href="./Talee_Resume.pdf" download="Talee_Resume">Download</a>
      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>JQuery</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3>
        Back-end Proficiencies
      </h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </main>
  );
}
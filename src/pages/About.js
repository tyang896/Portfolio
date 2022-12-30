import React from 'react';

const styles = {
  h1: {
    'text-align': 'center'
  }
}
export default function About() {
  return (
    <main className="p-3">
      <h1 className="title" style={styles.h1}>About Me</h1>
      <div className='d-flex justify-content-center'>
        <div id="profile-pic"></div>
      </div>
      <p className="about-me-desc">
        Hello! My name is Talee Yang and I am currently attending the University of Minnesota coding bootcamp. In the past I have worked in the bio-pharmaceuticals industry as a manufacturing associate. I am very passionate about learning and I have an interest in coding and design. Once I graduate from the coding bootcamp, I look forward to starting a new career as a web developer.
      </p>
    </main>
  );
}

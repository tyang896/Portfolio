import React from 'react';

const styles = {
  h1: {
    'textAlign': 'center'
  }
}
export default function About() {
  return (
    <main className="p-3">
      <h1 className="title" style={styles.h1}>About Me</h1>
      <div className='d-flex justify-content-center'>
        <div id="profile-pic"></div>
      </div>
      <p className="about-me-desc p-5">
        Hello my name is Talee Yang and I am a junior full-stack web developer. 
        I recently earned my certificate from The University of Minnesota coding bootcamp. 
        In the past I have worked in the bio-pharmaceuticals industry as a manufacturing associate.
        
        I am very passionate about learning and I have an interest in coding and design. 
        In my free time I enjoy spending quality time with my family. I am also a big movie lover, and 
        someone who enjoys art.
      </p>
    </main>
  );
}

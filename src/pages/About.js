import React from 'react';

const styles = {
  h1: {
    'textAlign': 'center'
  }
}
export default function About() {
  return (
    <main className="p-3 mb-5">
      <h1 className="title" style={styles.h1}>About Me</h1>
      <div className='d-flex justify-content-center'>
        <div id="profile-pic"></div>
      </div>
      <p className="about-me-desc p-5">
      As a Junior full stack web developer, I possess expertise in building responsive and dynamic 
      websites using various tools such as Javascript, HTML, CSS, React, and NodeJS. I have a strong interest in web development and take 
      pleasure in keeping up with the latest technologies. On top of my technical abilities, I consider 
      myself to be a creative person who spends my free time sketching and enjoying the outdoors. 
      Above all else, I cherish the time I get to spend with my loved ones and family. I am a hardworking 
      and dedicated developer who is committed to producing high-quality work and achieving exceptional 
      results.
      </p>
    </main>
  );
}

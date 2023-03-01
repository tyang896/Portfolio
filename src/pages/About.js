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
        Hi there, I'm Talee Yang! Building the web one line of code at a time. A Junior Full-Stack Web Developer who loves to create and solve problems. 
        Former Bio-Pharmaceuticals Manufacturing Associate. University of Minnesota Coding Bootcamp alum.
        Passionate about learning and exploring new things. I make the most of my free time with family, movies, art and coding. Always on a quest for knowledge.
      </p>
    </main>
  );
}

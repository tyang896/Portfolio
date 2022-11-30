import React from 'react';
import Project from '../Project'

//TODO: Import Project.js file
//TODO: 
export default function Portfolio() {
    const egaungal = {
        title: 'Egaungal',
        image: 'images/egaugnal-bg-2.jpg',
        link: 'https://egaugnal.herokuapp.com/',
        programs: 'Full Stack App',
        altDesc: 'Picture of globe'
    }
    return (
        <main>
            <h1 className="title">Portfolio Page</h1>
            <div className="projects">
            <Project title={egaungal.title } image={egaungal.image } link={egaungal.link } programs={egaungal.programs} altDesc={egaungal.altDesc } />
            </div>

        </main>
    );
}
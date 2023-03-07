import React from 'react';
import Project from '../components/Project';
import primaMateriaImg from '../images/pexels-enzo-abramo-1304237.jpg'
import egaugnalImg from '../images/egaugnal-bg-2.jpg'
import devBlogImg from '../images/pexels-jess-bailey-designs-768474.jpg'
import quizGameImg from '../images/pexels-leeloo-thefirst-5428833.jpg'
import weatherImg from '../images/pexels-josh-hild-2448749.jpg'
import schedulerImg from '../images/organizer-g78abf449a_1920.jpg'

export default function Portfolio() {
    // my projects

    const primaMateria = {
        title: 'Prima Materia',
        image: primaMateriaImg,
        link: 'https://prima-materia-86.herokuapp.com/',
        programs: 'Full Stack MERN App',
        altDesc: 'Picture of Statue',
        gitHub: 'https://github.com/tyang896/Prima-Materia.git',
    }

    const egaugnal = {
        title: 'Egaugnal',
        image: egaugnalImg,
        link: 'https://tranquil-crag-62768.herokuapp.com/',
        programs: 'Full Stack App',
        altDesc: 'Picture of globe',
        gitHub: 'https://github.com/tyang896/egaugnal.git',
    }

    const devBlog = {
        title: 'Dev Blog',
        image: devBlogImg,
        link: 'https://young-refuge-12429.herokuapp.com/',
        programs: 'Full Stack App',
        altDesc: 'Picture of notebook',
        gitHub: 'https://github.com/tyang896/Dev-Blog.git',
    }

    const quizGame = {
        title: 'Quiz Game',
        image: quizGameImg,
        link: 'https://tyang896.github.io/javascript-fundamentals/',
        programs: 'HTML/CSS/Javascript',
        altDesc: 'Picture of question mark',
        gitHub: 'https://github.com/tyang896/javascript-fundamentals.git',
    }

    const weather = {
        title: 'Weather',
        image: weatherImg,
        link: 'https://tyang896.github.io/weather-forecast/',
        programs: 'HTML/CSS/Javascript',
        altDesc: 'Picture of sky with raindrops',
        gitHub: 'https://github.com/tyang896/weather-forecast.git',
    }

    const dailyScheduler = {
        title: 'Daily Scheduler',
        image: schedulerImg,
        link: 'https://tyang896.github.io/daily-scheduler/',
        programs: 'HTML/CSS/Javascript',
        altDesc: 'Picture of flower and planner',
        gitHub: 'https://github.com/tyang896/daily-scheduler.git',
    }

    return (
        <main className="p-3 mb-5">
            <h1 className="title">Portfolio</h1>
            <div className="projects">
            <Project title={primaMateria.title } image={primaMateria.image } link={primaMateria.link } programs={primaMateria.programs} altDesc={primaMateria.altDesc } gitHub={primaMateria.gitHub}/>
            <Project title={egaugnal.title } image={egaugnal.image } link={egaugnal.link } programs={egaugnal.programs} altDesc={egaugnal.altDesc } gitHub={egaugnal.gitHub} />
            <Project title={devBlog.title } image={devBlog.image } link={devBlog.link } programs={devBlog.programs} altDesc={devBlog.altDesc } gitHub={devBlog.gitHub}/>
            <Project title={quizGame.title } image={quizGame.image } link={quizGame.link } programs={quizGame.programs} altDesc={quizGame.altDesc } gitHub={quizGame.gitHub}/>
            <Project title={weather.title } image={weather.image } link={weather.link } programs={weather.programs} altDesc={weather.altDesc } gitHub={weather.gitHub}/>
            <Project title={dailyScheduler.title } image={dailyScheduler.image } link={dailyScheduler.link } programs={dailyScheduler.programs} altDesc={dailyScheduler.altDesc } gitHub={dailyScheduler.gitHub}/>
            {/* Add more future projects here: */}
            </div>
        </main>
    );
}
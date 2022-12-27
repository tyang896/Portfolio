import React from 'react';
import Project from '../components/Project';
import primaMateriaImg from '../images/pexels-anthony-139641.jpg'
import egaungalImg from '../images/egaugnal-bg-2.jpg'
import sportEventsImg from '../images/pexels-aphiwat-chuangchoem-364308.jpg'
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
        altDesc: 'Picture of Statue'
    }

    const egaungal = {
        title: 'Egaungal',
        image: egaungalImg,
        link: 'https://egaugnal.herokuapp.com/',
        programs: 'Full Stack App',
        altDesc: 'Picture of globe'
    }

    const sportEvents = {
        title: 'Sport Events',
        image: sportEventsImg,
        link: 'https://jackwarrick.github.io/Sport-Events-Lookup/',
        programs: 'HTML/CSS/Javascript',
        altDesc: 'Picture of a soccerball'
    }

    const devBlog = {
        title: 'Dev Blog',
        image: devBlogImg,
        link: 'https://young-refuge-12429.herokuapp.com/',
        programs: 'Full Stack App',
        altDesc: 'Picture of notebook'
    }

    const quizGame = {
        title: 'Quiz Game',
        image: quizGameImg,
        link: 'https://tyang896.github.io/javascript-fundamentals/',
        programs: 'HTML/CSS/Javascript',
        altDesc: 'Picture of question mark'
    }

    const weather = {
        title: 'Weather',
        image: weatherImg,
        link: 'https://tyang896.github.io/weather-forecast/',
        programs: 'HTML/CSS/Javascript',
        altDesc: 'Picture of sky with raindrops'
    }

    const dailyScheduler = {
        title: 'Daily Scheduler',
        image: schedulerImg,
        link: 'https://tyang896.github.io/daily-scheduler/',
        programs: 'HTML/CSS/Javascript',
        altDesc: 'Picture of flower and planner'
    }

    return (
        <main className="p-3 mb-5">
            <h1 className="title">Portfolio</h1>
            <div className="projects">
            <Project title={primaMateria.title } image={primaMateria.image } link={primaMateria.link } programs={primaMateria.programs} altDesc={primaMateria.altDesc } />
            <Project title={egaungal.title } image={egaungal.image } link={egaungal.link } programs={egaungal.programs} altDesc={egaungal.altDesc } />
            <Project title={sportEvents.title } image={sportEvents.image } link={sportEvents.link } programs={sportEvents.programs} altDesc={sportEvents.altDesc } />
            <Project title={devBlog.title } image={devBlog.image } link={devBlog.link } programs={devBlog.programs} altDesc={devBlog.altDesc } />
            <Project title={quizGame.title } image={quizGame.image } link={quizGame.link } programs={quizGame.programs} altDesc={quizGame.altDesc } />
            <Project title={weather.title } image={weather.image } link={weather.link } programs={weather.programs} altDesc={weather.altDesc } />
            <Project title={dailyScheduler.title } image={dailyScheduler.image } link={dailyScheduler.link } programs={dailyScheduler.programs} altDesc={dailyScheduler.altDesc } />
            {/* Add more future projects here: */}
            </div>
        </main>
    );
}
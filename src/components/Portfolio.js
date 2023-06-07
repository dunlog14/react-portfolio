import React from 'react';
import Project from './Project';

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-container">
        <Project
          title="Halo Origins"
          image="halo-image-url"
          deployedLink="https://dunlog14.github.io/baking-bad/"
          githubLink="https://github.com/dunlog14/baking-bad"
        />
        <Project
          title="Weather Dashboard"
          image="weather-image-url"
          deployedLink="https://dunlog14.github.io/weather-dashboard/"
          githubLink="https://github.com/dunlog14/weather-dashboardwe"
        />
         <Project
          title="Note Taker"
          image="note-image-url"
          deployedLink="https://dunlog14.github.io/note-taker/"
          githubLink="https://github.com/dunlog14/note-taker"
        />
         <Project
          title="README Generator"
          image="readme-image-url"
          githubLink="https://github.com/dunlog14/readme-generator"
        />
         <Project
          title="Password Generator"
          image="password-image-url"
          deployedLink="https://dunlog14.github.io/my-password-generator/"
          githubLink="https://github.com/dunlog14/my-password-generator"
        />
         <Project
          title="Coding Quiz"
          image="quiz-image-url"
          deployedLink="https://dunlog14.github.io/Coding-Quiz/"
          githubLink="https://github.com/dunlog14/Coding-Quiz"
        />
        
      </div>
    </section>
  );
};

export default Portfolio;

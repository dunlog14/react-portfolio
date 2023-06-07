import React from 'react';
import myPhoto from '../assets/Headshot 3.jpg';

const AboutMe = () => {
  return (
    <section>
      <img src={myPhoto} alt="Logan Dunaway Headshot" />
      <p>Graduate from the Darla Moore School of Business. Currently employed as a Business Analyst at 20North Digital Marketing located in Atlanta, GA.</p>
    </section>
  );
};

export default AboutMe;


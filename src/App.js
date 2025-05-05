import React from 'react';
import './App.css';
import { FaGithub, FaFacebook, FaLaptopCode, FaLightbulb, FaCode } from 'react-icons/fa';
import { FaBasketball } from 'react-icons/fa6';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contacts</a>
      </nav>

      <header id="about" className="section about">
        <div className="about-content">
          <h3>Nice to meet you!</h3>
          <h1>I'm Mark Jayson Ramilo</h1>
          <img src="/profile.png" alt="John Joseph Israel" className="profile-image" />
          <h4>Developer / Programmer</h4>
          <div className="text">
            <p>
            As a digital craftsman, I specialize in transforming ideas into interactive experiences. 
            From sleek user interfaces to resilient backend logic, 
            I thrive on blending creativity with code to deliver smart, seamless, and scalable web solutions that leave a lasting impression.
            </p>
          </div>
        </div>
      </header>

      <section id="skills" className="section skills">
        <h2>Skills</h2>
        <div className="skill-cards">
          <div className="skill-card"><FaLaptopCode size={30} /> <span>Computer Literate</span></div>
          <div className="skill-card"><FaLightbulb size={30} /> <span>Critical Thinking</span></div>
          <div className="skill-card"><FaBasketball size={30} /> <span>Basketball</span></div>
          <div className="skill-card"><FaCode size={30} /> <span>Basic Programming</span></div>
        </div>
      </section>

      <section id="projects" className="section projects">
        <h2>Projects</h2>
        <p>Coming soon...</p>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p><FaGithub /> GitHub: <a href="https://github.com/shampooday">https://github.com/shampooday</a></p>
        <p><FaFacebook /> Facebook: <a href="https://www.facebook.com/mj.ramilo.825225">https://www.facebook.com/mj.ramilo.825225</a></p>
      </section>
    </div>
  );
}

export default App;

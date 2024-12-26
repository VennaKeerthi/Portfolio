
// Profile Image
import profile from "./assets/pimg.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import php from "./assets/techstack/php.jpg";
import nodejs from "./assets/techstack/nodejs.jpg";

import mysql from "./assets/techstack/mysql.jpg";
import mongoDB from "./assets/techstack/mongoDB.jpg";

import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
// Logos


// Enter your Personal Details here
export const personalDetails = {
  name: "Keerthi",
  tagline: "I build things for web",
  img: profile,
  about: `Final year BTech student at SASTRA University, seeking for an opportunity in the tech field to utilize my
technical skills, adaptability, and passion for innovation. Also enthusiastic about contributing to projects,
gain insights from experienced professionals and develop a successful career.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/keerthi-venna/",
  github: "https://github.com/VennaKeerthi/",
};


// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Computer Science & Engineering",
    Company: `SASTRA Deemed University`,
    Location: "Thanjavur, TamilNadu",
    Duration: "Aug 2021 - Present",
  },
  {
    Position: "Higher secondary",
    Company: `Narayana Junior College`,
    Location: "Nellore, Andhra Pradesh",
    Duration: "June 2019 - May 2021",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  php: php,
  nodejs: nodejs,
  mysql: mysql,
  mongoDB: mongoDB,
  vscode: vscode,
  git: git,
  github: github,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Ecommerce Bookstore",
    image: projectImage1,
    description: `Responsive multi pages e-book store website designed for an engaging and seamless experience,Website consists of register and login form, admindashboard, home page, orders, cart, checkout etc.`,
    techstack: "HTML/CSS, JavaScript, PHP",
    previewLink: "http://ecommercebookstore.infinityfreeapp.com",
    githubLink: "https://github.com/VennaKeerthi/Ecommerce_Bookstore-PHP.git",
  },
  {
    title: "Weather PWA",
    image: projectImage2,
    description: `PWA designed to provide users with weather forecasts, combining the best features of web andmobile applications.Uses service workers to function in offline, APIintegration(OpenWeatherMap) to get real-timeweather updates.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://golden-twilight-5d87cb.netlify.app/",
    githubLink: "https://github.com/VennaKeerthi/PWA_WeatherApp.git",
  },
  {
    title: "To-do list",
    image: projectImage3,
    description: `A to-do list is a tool that helps individuals organize tasks they need to complete. It typically includes a list of tasks, often prioritized by importance or deadline. This ensures that important tasks are not overlooked.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://vennakeerthi.github.io/To-do-list/",
    githubLink: "https://github.com/VennaKeerthi/To-do-list.git",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "vennakeerthi2004@gmail.com",
  phone: "+91 8309802221",
};
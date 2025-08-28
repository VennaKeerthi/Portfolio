
// Profile Image
import profile from "./assets/pimg.jpeg";
// Tech stack images

import c from "./assets/techstack/c.png";
import cpp from "./assets/techstack/cpp.png"
import python from "./assets/techstack/python.jpg"
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
import projectImage1 from "./assets/projects/projectImage1.jpg";
import projectImage2 from "./assets/projects/projectImage2.png";
import projectImage3 from "./assets/projects/projectImage3.jpg";
import projectImage4 from "./assets/projects/projectImage4.png";
import projectImage5 from "./assets/projects/projectImage5.jpg";
import projectImage6 from "./assets/projects/projectImage6.jpg";
// Logos


// Enter your Personal Details here
export const personalDetails = {
  name: "Keerthi",
  tagline: "I build things for web",
  img: profile,
  about: `BTech graduate from SASTRA University, seeking for an opportunity in the tech field to utilize my
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
    Duration: "Aug 2021 - May 2025",
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
  c: c,
  cpp: cpp,
  python: python,
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
    title: "Deep-Medic",
    image: projectImage1,
    description: `Automated Identification of Indian Medicinal Plants using Deep Learning models. Single plant identification was done with CNN, multi plant identification was done using YOLO and RetinaNet models.`,
    techstack: "Deep learning, Python, HTML/CSS, JavaScript",
    previewLink: "https://github.com/VennaKeerthi/Deep-Medic.git",
    githubLink: "https://github.com/VennaKeerthi/Deep-Medic.git",
  },
  {
    title: "Ecommerce store",
    image: projectImage2,
    description: `Full-stack ecommerce application for a fashion store where users can browse, add products to their cart, and place orders with multiple payment options, including Cash on Delivery and Stripe integration. .`,
    techstack: "React, Node, Express, MongoDb, JavaScript",
    previewLink: "https://ecommerce-store-gg75.onrender.com/",
    githubLink: "https://github.com/VennaKeerthi/MERN-ecommerce-store.git",
  },
  {
    title: "Weather PWA",
    image: projectImage3,
    description: `PWA designed to provide users with weather forecasts, combining the best features of web and mobile applications. Uses service workers to function in offline, API integration (OpenWeatherMap)to get real-time weather updates.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://golden-twilight-5d87cb.netlify.app/",
    githubLink: "https://github.com/VennaKeerthi/PWA_WeatherApp.git",
  },
  {
    title: "Fake News Detection",
    image: projectImage4,
    description: `This is a Machine Learning-based Flask web application designed to detect whether a given news article is Fake or Real. The model is trained using NLP and ML techniques and integrated into a Flask framework for deployment.`,
    techstack: "Python, Flask, HTML/CSS, JavaScript",
    previewLink: "https://github.com/VennaKeerthi/Fake-news-detection.git",
    githubLink: "https://github.com/VennaKeerthi/Fake-news-detection.git",
  },
  {
    title: "To-do list",
    image: projectImage5,
    description: `A to-do list is a tool that helps individuals organize tasks they need to complete. It typically includes a list of tasks, often prioritized by importance or deadline. This ensures that important tasks are not overlooked.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://vennakeerthi.github.io/To-do-list/",
    githubLink: "https://github.com/VennaKeerthi/To-do-list.git",
  },
  {
    title: "Student Information System",
    image: projectImage6,
    description: `This project provides a comprehensive system for managing student data, including the ability to create, view, edit, and delete student details. It demonstrates the fundamental operations of a CRUD application for student management using Django.`,
    techstack: "Django, Python, HTML/CSS",
    previewLink: "https://github.com/VennaKeerthi/Student-information-system-Django.git",
    githubLink: "https://github.com/VennaKeerthi/Student-information-system-Django.git",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "vennakeerthi2004@gmail.com",
  phone: "+91 8309802221",
};
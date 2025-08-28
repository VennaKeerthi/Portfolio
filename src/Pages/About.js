import React from "react";
import Work from "../Components/Work";
import { personalDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section className="w-full bg-gradient-to-r py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side - About Me Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            {personalDetails.about}
          </p>
          <p className="text-lg leading-relaxed">
            I thrive on solving real-world problems through clean and scalable solutions, enjoy exploring new technologies, and building responsive, user-friendly web applications. 🚀
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            className="w-60 md:w-80 rounded-2xl shadow-xl border-4 border-transparent 
                  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 
                  hover:scale-105 transition-transform duration-300 ease-in-out"
            src={personalDetails.img}
            alt="About Me"
            
          />
        </div>
      </div>
    </section>
    
      <section>
        <br></br><br></br><h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
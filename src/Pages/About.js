import React from "react";
import Work from "../Components/Work";
import { personalDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
            <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About me
          </h1><br></br>
            <p className="card-text">{personalDetails.about}</p>

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
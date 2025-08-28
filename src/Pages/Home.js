
import React, { useRef, useEffect } from "react";
import gsap from "gsap"; 
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline} = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
  <main className="container mx-auto max-width section">
    <div className="flex flex-col md:flex-row items-center md:items-center justify-between">
      
      {/* Left: Text */}
      <div className="text-center md:text-center flex-1">
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading 
                     md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br />My Name is
        </h1>

        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent 
                     md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>

        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading 
                     md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>

    </div>
  </main>
);
}


export default Home;

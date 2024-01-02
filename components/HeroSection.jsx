import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import circletype from "circletype";

export const HeroSection = () => {
  const [clicked, setClicked] = useState(false);
  const circleRef = useRef();
  useEffect(() => {
    if (circleRef.current) {
      const circleType = new circletype(circleRef.current);
      circleType.radius(50);
    }
  }, []);
  return (
    <div className="wrapper1">
      <div className="overflow-hidden fixed h-full w-full z-[3]">
        <Navbar clicked={clicked} setClicked={setClicked} />
      </div>
      <div className="hero-section ">
        <div className="hero-gif"></div>
        <div className="hero-title">
          <h1 className="glitch" data-text="DZNS">
            DZNS
          </h1>
          <p>STUDIOS</p>
        </div>
        <div className="rotatethis">
          <h2 id="rotated" ref={circleRef}>
            Graphics • Video Editing • UI/UX • Experiene •{" "}
          </h2>
        </div>

        <div className="social-media z-[20]">
          <ul>
            <a href="https://www.instagram.com/dzns.studio/">
              <li>instagram</li>
            </a>
            <a href="https://twitter.com/Dzns_Studios">
              <li>twitter</li>
            </a>
            {/* <li>facebook</li> */}
          </ul>
        </div>
      </div>
      <div className="gif-overlay"></div>
    </div>
  );
};

import React from "react";
import {
  aboutHeading,
  aboutDescription,
  resumeLink
} from "../../editable-stuff/configurations.json";
import Particles from "react-particles-js";
import emoji from "react-easy-emoji";

const AboutMe = () => {

  return (
    <div id="aboutme" className=" m-0 " style={{ paddingTop: "30px" }}>
      <Particles
        style={{ color: "black", position: "absolute", height: "50%" }}
        params={{
          particles: {
            number: {
              value: 16,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
            "color": {
              "value": ["#000000", "#EE0000"]
            },
            "shape": {
              "type": "square",
              "stroke": {
                "width": 1,
                "color": "E10000"
              }
            },
            "opacity": {
              "value": 0.87,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 2,
                "opacity_min": 0.7,
                "sync": true
              }
            },
            "size": {
              "value": 8,
              "random": false,
              "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.1,
                "sync": true
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 87,
              "color": "#F00000",
              "opacity": 1,
              "width": 2
            },
            "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "bounce",
              "bounce": true,
              "attract": {
                "enable": true,
                "rotateX": 400,
                "rotateY": 800
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "bubble"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 4.8,
                "duration": 0.8,
                "opacity": 4,
                "speed": 0.7
              },
              "repulse": {
                "distance": 80,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        }}
      />
      <div className="p-5">
        <h1 className="display-4 mb-5 text-center">{aboutHeading}</h1>
        <div className="row">
          <div className="col-md-5 mt-5">
            <p className="lead text-center"><span>yo! </span>{aboutDescription}</p>
            {resumeLink && (
              <p className="lead text-center">
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  <div class="btn-custom btn-two">
                    <span>Resume</span>
                  </div>
                </a>
              </p>
            )}
          </div>
          <div className="col-md-7">
              <img className="aboutMe-avatar-sizing" src={process.env.PUBLIC_URL + 'programmer.svg'} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import React, { Component } from 'react';

import bars from '../resources/scanimation/bars45large.png';
import magentaBars from '../resources/scanimation/magentaBars.png';
import projects_scanimation from '../resources/scanimation/projects45.png';
import { projectsArray } from '../resources/resourceArrays.js';
import arrow from '../resources/icons/down-arrow.svg';

class Projects extends Component {
  render() {
    return (
      <div id='projects'>
        <div id='projects-banner'>
          <div className='bars-container-1'>
            <img className='base' src={bars} alt='bars45large' />
          </div>

          <div className='magenta-bars-container'>
            <img className='base' src={magentaBars} alt='magentaBars' />
          </div>

          <div className='bars-container-2'>
            <img className='base' src={bars} alt='bars45large' />
          </div>

          <img
            className='parallax__layer--scanimation'
            src={projects_scanimation}
            alt='projects_scanimation'
          />

          <div className='projects-sticker'>
            <div className='parallax-layer--front'>
              <div className='name'>Projects</div>
            </div>
          </div>
        </div>

        <div className='projects-content-container'>
          {projectsArray.map(project => (
            <div key={project.id} className='project-cutout'>
              <img
                className='project-image'
                src={project.image}
                alt={project.title}
              />

              <div className='text'>
                <div>
                  <div className='title'>{project.title}</div>

                  <div className='description'>{project.description}</div>
                </div>

                <div className='tools'>
                  {project.tools.map((tool, i) => {
                    if (i === 0 && project.tools.length === 1)
                      return (
                        <span key={i}>
                          made with <b>{tool}</b>
                        </span>
                      );
                    else if (i === 0)
                      return (
                        <span key={i}>
                          made with <b>{tool}, </b>
                        </span>
                      );
                    else if (i === project.tools.length - 1)
                      return (
                        <span key={i}>
                          <b>{tool}</b>
                        </span>
                      );
                    else
                      return (
                        <span key={i}>
                          <b>{tool}, </b>
                        </span>
                      );
                  })}
                </div>
              </div>

              <div className='links'>
                {project.github && (
                  <a className='link' href={project.github}>
                    <div className='link-text'>github</div>
                  </a>
                )}

                {project.video && (
                  <a className='link' href={project.video}>
                    <div className='link-text'>video</div>
                  </a>
                )}

                {project.visit && (
                  <a className='link' href={project.visit}>
                    <div className='link-text'>
                      visit
                      <img src={arrow} alt={arrow} />
                    </div>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;

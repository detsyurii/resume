import React from "react";
import { Description } from "./Description";

export const Projects = ({ projects }) => {
  return (
    <section className="projects-experience section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="experience__container bd-grid">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};

const Project = ({ name, company, period, description, url, gitHubLink }) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project__link"
            >
              {name} - {company}
            </a>
          ) : (
            <>
              {name} - {company}
            </>
          )}
        </h3>
        <span className="experience__project">{period}</span>
        {gitHubLink && (
          <a
            href={gitHubLink}
            target="_blank"
            rel="noreferrer"
            className="github__link"
          >
            GitHub Link
          </a>
        )}
        {description.map((desc, i) => (
          <Description key={i} desc={desc} />
        ))}
      </div>
    </div>
  );
};

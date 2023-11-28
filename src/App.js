import React from "react";

import { Profile } from "./Components/Profile";
import { Education } from "./Components/Education";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { SocialMedia } from "./Components/SocialMedia";
import { AboutMe } from "./Components/AboutMe";

import { Data as dataSchema } from "./Schemas/Data";

export const App = () => {

  const { profile, aboutMe, skills, socialMedia, experience } = dataSchema;

  return (
    <>
      <main className="l-main bd-container" id="bd-container">
        <div className="resume" id="area-cv">
          <div className="resume__left">
            <Profile {...profile} />
            <Skills {...skills} />
            <SocialMedia {...socialMedia} />
          </div>
          <div className="resume__right">
            <AboutMe {...aboutMe} />
            <Education {...experience} />
            <Projects {...experience} />
          </div>
        </div>
      </main>
    </>
  );
};

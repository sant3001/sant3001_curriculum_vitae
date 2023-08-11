import React, { FC } from 'react';
import { FaBriefcase, FaUniversity } from 'react-icons/fa';
import { useUser } from './context';
import { ExperienceRow } from './ExperienceRow';
import { EducationRow } from 'components/EducationRow';
import { Spinner } from 'components/Spinner';

const Main: FC = () => {
  const user = useUser();
  return (
    <div className="main col-sm-8 col-xs-12 white p-4 pt-5">
      <div className="row">
        <div className="col-1 pt-4">
          <div className="strip colored" />
        </div>
        <div className="col-11 pt-4 ps-5">
          <div className="category">
            <div className="colored rounded-circle text-center align-middle">
              <FaBriefcase />
            </div>
          </div>
          <h3 className="h2">Professional Experience</h3>
          <div className="mt-5 mb-3">
            {user.experience?.length > 0 ? (
              user.experience.map((exp) => <ExperienceRow key={`exp-row-${exp.id}`} experience={exp} />)
            ) : (
              <Spinner />
            )}
          </div>
          <div className="category">
            <div className="colored rounded-circle text-center align-middle">
              <FaUniversity />
            </div>
          </div>
          <h3 className="h2">Education</h3>
          <div className="mt-5 mb-3">
            {user.education?.length > 0 ? (
              user.education.map((edu) => <EducationRow key={edu.id} education={edu} />)
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

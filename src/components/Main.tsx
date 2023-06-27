import moment from 'moment';
import React, { FC } from 'react';
import { FaBriefcase, FaUniversity } from 'react-icons/fa';
import { User } from 'types';

interface MainProps {
  user: User;
}

const Main: FC<MainProps> = ({ user }) => {
  const formatExp = (date: Date) => moment(date, 'DD-MMM-YYYY').format('MMM YYYY');
  const formatEdu = (date: Date) => moment(date, 'DD-MMM-YYYY').format('YYYY');
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
          <br />
          <br />
          {(user.experience || []).map((exp) => {
            return (
              <div className="body-item" key={exp.id}>
                <div className="body-dot colored" />
                <h4 className="d-inline">{exp.company.name}</h4>
                <h6 className="d-inline">
                  {exp.location && <>, {[exp.location.city, exp.location.state || exp.location.country].join(' ')}</>}
                  <span>&nbsp;&mdash;&nbsp;</span>
                  <em>{exp.role}</em>
                </h6>
                {exp.company.website && (
                  <p className="mb-1">
                    <a href={exp.company.website}>{exp.company.website}</a>
                  </p>
                )}
                <p className="text-uppercase mb-2">
                  {formatExp(exp.duration.start)} - {exp.duration.end ? formatExp(exp.duration.end) : 'Present'}
                </p>
                <p className="mb-4 text-justify">{exp.description}</p>
              </div>
            );
          })}
          <br />
          <div className="category">
            <div className="colored rounded-circle text-center align-middle">
              <FaUniversity />
            </div>
          </div>
          <h3 className="h2">Education</h3>
          <br />
          <br />
          {(user.education || []).map((edu) => {
            return (
              <div className="body-item" key={edu.id}>
                <div className="body-dot colored" />
                <h4 className="d-inline">{edu.college}</h4>
                <h6 className="d-inline">
                  {edu.location && <>, {[edu.location.city, edu.location.state || edu.location.country].join(' ')}</>}
                  <span>&nbsp;&mdash;&nbsp;</span>
                  <em>{edu.degree}</em>
                </h6>
                <p className="text-uppercase mb-2">
                  {formatEdu(edu.duration.start)} - {edu.duration.end ? formatEdu(edu.duration.end) : 'Present'}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;

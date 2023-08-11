import moment from 'moment';
import React, { FC } from 'react';
import { Education } from 'types';

interface EducationRowProps {
  education: Education;
}
export const EducationRow: FC<EducationRowProps> = (props) => {
  const { education: edu } = props;
  const formatEdu = (date: Date | string) => moment(date).format('YYYY');

  return (
    <div className="body-item">
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
};

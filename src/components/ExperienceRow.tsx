import moment from 'moment/moment';
import React, { FC } from 'react';
import { Experience } from 'plugins/cvdata';
import { useMarkdownToHTML } from 'src/hooks';

interface ExperienceRowProps {
  experience: Experience;
}

const formatExp = (date: Date | string) => moment(date).format('MMM YYYY');

export const ExperienceRow: FC<ExperienceRowProps> = (props) => {
  const { experience: exp } = props;

  const html = useMarkdownToHTML(exp.description);

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
      <div
        className="mb-4 text-justify"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default {};

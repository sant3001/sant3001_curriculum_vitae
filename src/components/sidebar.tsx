import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { FC, useMemo } from 'react';
import { BsGeoAlt, BsEnvelopeFill } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { useMarkdownToHTML } from 'src/hooks';
import { User, Skill } from 'types';

interface SkillProps {
  skill: Skill;
}

const SkillRow: FC<SkillProps> = ({ skill }) => {
  const classes = useMemo(() => {
    let progressClass = 'bg-danger';
    if (skill.value >= 90) progressClass = 'bg-success';
    else if (skill.value >= 50) progressClass = 'bg-warning';
    return ['progress-bar', progressClass];
  }, [skill.value]);

  return (
    <>
      <div className="col-4 col-md-4">
        <p className="mb-0">{skill.name}</p>
      </div>
      <div className="col-8 col-md-8">
        <div className="progress">
          <div
            className={classes.join(' ')}
            role="progressbar"
            style={{ width: `${skill.value}%` }}
            aria-valuenow={skill.value}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>
    </>
  );
};

interface SideBarProps {
  user: User;
  image?: IGatsbyImageData;
}

const Sidebar: FC<SideBarProps> = ({ user, image }) => {
  const html = useMarkdownToHTML(user.about);

  return (
    <div className="col-sm-4 col-xs-12 colored overflow-hidden p-4 pb-5 p-sm-3 pb-sm-5 p-md-4 pb-md-5">
      {image && (
        <div className="mt-2 mt-md-5">
          <div className="row">
            <div className="col-8 col-sm-11 mx-auto rounded-circle p-0 overflow-hidden">
              <GatsbyImage image={image} alt={user.imgAlt} className="img-fluid" />
            </div>
          </div>
        </div>
      )}
      {user.name && (
        <div className="mt-4 title">
          <h1 className="h2">{user.name}</h1>
        </div>
      )}
      {user.title && (
        <div className="mt-n2">
          <h2 className="h6">{user.title}</h2>
        </div>
      )}
      {html && (
        <>
          <div className="mt-5 text-center">
            <h5>About Me</h5>
          </div>
          <div
            className="text-justify"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </>
      )}
      {(user.addressLine1 || user.phoneNumber || user.email) && (
        <>
          <div className="mt-5 text-center">
            <h5>Contact</h5>
          </div>
          <div className="contact mt-4">
            <div className="row align-items-center row-cols-2 row-cols-sm-1 row-cols-md-2 gy-2">
              {user.addressLine1 && (
                <>
                  <div className="col-2 d-sm-none d-md-block col-md-2">
                    <BsGeoAlt />
                  </div>
                  <div className="col-10 col-sm-12 col-md-10">
                    <p className="mb-1">{user.addressLine1}</p>
                    <p className="mb-0">{user.addressLine2}</p>
                  </div>
                </>
              )}
              {user.phoneNumber && (
                <>
                  <div className="col-2 d-sm-none d-md-block col-md-2">
                    <FaPhoneAlt />
                  </div>
                  <div className="col-10 col-sm-12 col-md-10">
                    <p className="mb-0">
                      <a href={`tel:${user.phoneNumber}`}>{user.phoneNumber}</a>
                    </p>
                  </div>
                </>
              )}
              {user.email && (
                <>
                  <div className="col-2 d-sm-none d-md-block col-md-2">
                    <BsEnvelopeFill />
                  </div>
                  <div className="col-10 col-sm-12 col-md-10">
                    <p className="mb-0">
                      <a href={`mailto:${user.email}`}>{user.email}</a>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
      {(user.skillsSet || []).map((ss) => (
        <React.Fragment key={ss.id}>
          <div className="mt-5 text-center">
            <h5>{ss.name}</h5>
          </div>
          <div className="mt-4 skills">
            <div className="row align-items-center row-cols-2 row-cols-sm-1 row-cols-md-2 gy-2">
              {ss.skills.map((p) => (
                <SkillRow key={p.id} skill={p} />
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
      <div className="sidebar colored col-xs-12" />
    </div>
  );
};

export default Sidebar;

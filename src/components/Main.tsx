import React from 'react';
import { FaBriefcase, FaUniversity } from 'react-icons/fa';

const Main = (): JSX.Element => {
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
          <h3>Professional Experience</h3>
          <p>
            Ut varius tincidunt libero. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend
            augue, ac auctor orci leo non est. Nullam dictum felis eu pede mollis pretium. Vestibulum eu odio. Aliquam
            lobortis.
          </p>
          <p>
            Fusce pharetra convallis urna. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Vivamus
            quis mi. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Integer tincidunt.
          </p>
          <div className="category">
            <div className="colored rounded-circle text-center align-middle">
              <FaUniversity />
            </div>
          </div>
          <h3>Education</h3>
          <p>
            Nam eget dui. Pellentesque commodo eros a enim. Sed a libero. Vivamus consectetuer hendrerit lacus. Aenean
            imperdiet.
          </p>
          <p>
            Pellentesque auctor neque nec urna. In ac felis quis tortor malesuada pretium. Nunc egestas, augue at
            pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Donec elit libero, sodales
            nec, volutpat a, suscipit non, turpis. Fusce fermentum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

import React from 'react';

export const Spinner = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading&elipsis;</span>
      </div>
    </div>
  );
};

import React from 'react';

function Card({ title, icon, link }) {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-3">
            <img src={icon} className="card-img" alt={title} />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <a className="card-link" href={link}>
                {link}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

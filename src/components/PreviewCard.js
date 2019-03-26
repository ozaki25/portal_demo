import React, { useState, useRef } from 'react';
import Portal from './Portal';

function PreviewCard({ title, icon, link }) {
  const [visible, setVisible] = useState(false);
  const portalElm = useRef(null);
  return (
    <div
      className="card"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => portalElm.current.activate()}
    >
      <div className="row no-gutters">
        <div className="col-lg-3">
          <img src={icon} className="card-img" alt={title} />
        </div>
        <div className="col-lg-9">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <a className="card-link" href={link}>
              {link}
            </a>
          </div>
        </div>
      </div>
      {visible && <Portal src={link} _ref={portalElm} />}
    </div>
  );
}

export default PreviewCard;

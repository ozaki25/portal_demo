import React from 'react';

const style = {
  border: '2px solid #bbb',
  borderRadius: '1em',
  position: 'absolute',
  height: '800px',
  width: '450px',
  top: '110px',
  zIndex: 1,
};

function Portal({ src, _ref }) {
  return <portal src={src} ref={_ref} style={style} />;
}

export default Portal;

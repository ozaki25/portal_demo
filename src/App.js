import React from 'react';
import Navbar from './components/Navbar';
import Title from './components/Title';
import PreviewCard from './components/PreviewCard';
import links from './constants/links';

function App() {
  return (
    <>
      <Navbar title="Portals Demo" />
      <div className="container">
        <Title text="ozaki25's Link" />
        <div className="row">
          {links.map((link, i) => (
            <>
              <div className="col" key={i}>
                <PreviewCard {...link} />
              </div>
              {i % 2 === 1 && <div className="w-100 mb-3" />}
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Title from './components/Title';
import PreviewCard from './components/PreviewCard';
import links from './constants/links';

function App() {
  let rows = [];
  links.forEach((link, i) => {
    if (i % 2 === 0) rows.push([links[i], links[i + 1] || null]);
  });
  return (
    <>
      <Navbar title="Portals Demo" />
      <div className="container">
        <Title text="ozaki25's Link" />
        {rows.map(([link1, link2], i) => (
          <div className="row mb-3" key={i}>
            <div className="col-md-6">
              <PreviewCard {...link1} />
            </div>
            {link2 && (
              <div className="col-md-6">
                <PreviewCard {...link2} />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
// onMouseenterしたらモーダル的にportal出す

export default App;

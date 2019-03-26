import React from 'react';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Card from './components/Card';
import links from './constants/links';

function App() {
  let rows = [];
  links.forEach((link, i) => {
    if (i % 2 === 0) rows.push([links[i], links[i + 1] || null]);
  });
  return (
    <>
      <Navbar title="Portal Demo" />
      <div className="container">
        <Title text="ozaki25's Link" />
        {rows.map(([link1, link2], i) => (
          <div className="row mb-3" key={i}>
            <Card {...link1} />
            <Card {...link2} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

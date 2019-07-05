import React from 'react';

export default function Footer() {
  const gitLogo = require('../media/gitHubLogo.png');
  const linkedin = require('../media/linkedinLogo.png');

  return (
    <div className="footer">
      <a href="https://github.com/Enanaky/marvel" rel="noopener noreferrer" target="_blank"><img id="logo" src={gitLogo} alt="github"/></a>
      <a href="https://www.linkedin.com/in/ignacio-petrone-48045669/" rel="noopener noreferrer" target="_blank"><img id="logo" src={linkedin} alt="github"/></a>
    </div>
  );
}
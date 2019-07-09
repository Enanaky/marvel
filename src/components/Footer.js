import React from 'react';

export default function Footer() {
  const gitLogo = require('../media/gitHubLogo.png');
  const linkedin = require('../media/linkedinLogo.png');
  const xing = require('../media/xingLogo.png');

  return (
    <div className="footer">
      <p className="leyend1">This is a responsive React-SPA created for academics purposes</p>
      <p className="leyend2">#react #hooks #react-router-dom #marvel-apiRest #axios #bootstrap #flexbox.</p>
      <div className="footer-links">
        <a href="https://github.com/Enanaky/marvel" rel="noopener noreferrer" target="_blank"><img id="logo" src={gitLogo} alt="github"/></a>
        <a href="https://www.linkedin.com/in/ignacio-petrone-48045669/" rel="noopener noreferrer" target="_blank"><img id="logo" src={linkedin} alt="github"/></a>
        <a href="https://www.xing.com/profile/Ignacio_Petrone/cv?sc_o=mxb_p" rel="noopener noreferrer" target="_blank"><img id="logo" src={xing} alt="github"/></a>
      </div>
    </div>
  );
}
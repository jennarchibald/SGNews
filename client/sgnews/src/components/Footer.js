import React from 'react';
import './Footer.css';

const Footer = (props) => {
  let initialPath = "/"
  if (props.editor){
    initialPath += "editor/"
  }

  return (
    <footer className="footer">
    <a href="https://github.com/ben-barks"><img className="gh" src="/../icons/github.png"/></a>
    <a href="https://github.com/jennarchibald"><img className="gh" src="/../icons/github.png"/></a>
    <a href="https://github.com/beerbatteredcode"><img className="gh" src="/../icons/github.png"/></a>
    <a href="https://github.com/EnigmaticGale"><img className="gh" src="/../icons/github.png"/></a>
    <a href="https://www.linkedin.com/in/jennarchibald91/"><img className="gh" src="/../icons/linkedin.png"/></a>
    <a href="https://www.linkedin.com/in/grant-rutherford-4a889a17b/"><img className="gh" src="/../icons/linkedin.png"/></a>
    <a href="https://www.linkedin.com/in/ben-svajko/"><img className="gh" src="/../icons/linkedin.png"/></a>

    </footer>
  )
}

export default Footer;

import React from 'react';
import './Footer.css';

const Footer = (props) => {
  let id = "";

  if (props.editor){
    id += "private-footer"
  } else {
    id += "public-footer"
  }

  return (
    <footer className="footer" id = {id}>
    <a href="https://github.com/ben-barks"><img alt = "" className="gh" src="/../icons/github.png"/></a>
    <a href="https://github.com/jennarchibald"><img alt = "" className="gh" src="/../icons/github.png"/></a>
    <a href="https://github.com/beerbatteredcode"><img alt = "" className="gh" src="/../icons/github.png"/></a>
    <a href="https://github.com/EnigmaticGale"><img alt = "" className="gh" src="/../icons/github.png"/></a>
    <a href="https://www.linkedin.com/in/jennarchibald91/"><img alt = "" className="gh" src="/../icons/linkedin.png"/></a>
    <a href="https://www.linkedin.com/in/grant-rutherford-4a889a17b/"><img alt = "" className="gh" src="/../icons/linkedin.png"/></a>
    <a href="https://www.linkedin.com/in/ben-svajko/"><img alt = "" className="gh" src="/../icons/linkedin.png"/></a>

    </footer>
  )
}

export default Footer;

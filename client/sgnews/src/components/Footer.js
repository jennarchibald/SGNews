import React from 'react';
import './Footer.css';

const Footer = (props) => {
  let initialPath = "/"
  if (props.editor){
    initialPath += "editor/"
  }

  return (
    <footer className="footer">
    <a href="https://github.com/ben-barks"><img className="gh" src="https://www.pngfind.com/pngs/m/40-405156_github-octocat-logo-black-and-white-transparent-github.png"/></a>
    <a href="https://github.com/jennarchibald"><img className="gh" src="https://www.pngfind.com/pngs/m/40-405156_github-octocat-logo-black-and-white-transparent-github.png"/></a>
    <a href="https://github.com/beerbatteredcode"><img className="gh" src="https://www.pngfind.com/pngs/m/40-405156_github-octocat-logo-black-and-white-transparent-github.png"/></a>
    <a href="https://github.com/EnigmaticGale"><img className="gh" src="https://www.pngfind.com/pngs/m/40-405156_github-octocat-logo-black-and-white-transparent-github.png"/></a>
    <a href="https://www.linkedin.com/in/jennarchibald91/"><img className="gh" src="https://icon2.kisspng.com/20180613/vxa/kisspng-linkedin-rsum-computer-icons-curriculum-vitae-5b20be3f3c27b0.3235111815288725112464.jpg"/></a>
    <a href="https://www.linkedin.com/in/grant-rutherford-4a889a17b/"><img className="gh" src="https://icon2.kisspng.com/20180613/vxa/kisspng-linkedin-rsum-computer-icons-curriculum-vitae-5b20be3f3c27b0.3235111815288725112464.jpg"/></a>
    <a href="https://www.linkedin.com/in/ben-svajko/"><img className="gh" src="https://icon2.kisspng.com/20180613/vxa/kisspng-linkedin-rsum-computer-icons-curriculum-vitae-5b20be3f3c27b0.3235111815288725112464.jpg"/></a>

    </footer>
  )
}

export default Footer;

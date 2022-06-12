import './style.scss';
import Logo from '../../../src/assets/img/logo-sportsee.svg'

function Header() {
  return ( 
    <header className="header">
      <nav className="header-nav">
        <a href="/" className="header-navItem">
          <img src={Logo} alt="Logo SportSee" />
        </a>
        <a href="/" className="header-navItem">Accueil</a>
        <a href="/" className="header-navItem">Profil</a>
        <a href="/" className="header-navItem">Règlage</a>
        <a href="/" className="header-navItem">Communauté</a>
      </nav>
    </header>
  );
}

export default Header;

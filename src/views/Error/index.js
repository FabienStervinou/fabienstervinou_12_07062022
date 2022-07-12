import { NavLink } from 'react-router-dom';

function Error() {
  return ( 
    <main className="Error">
      <h1>Erreur 404</h1>
      <NavLink to="/">Retour à la page d'accueil</NavLink>
    </main>
  );
}

export default Error;

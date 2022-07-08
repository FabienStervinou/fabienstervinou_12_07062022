import { NavLink } from 'react-router-dom';

function Error() {
  return ( 
    <>
      <h2>Error</h2>
      <NavLink to="/user/12">Retour à la page d'accueil</NavLink>
    </>
  );
}

export default Error;

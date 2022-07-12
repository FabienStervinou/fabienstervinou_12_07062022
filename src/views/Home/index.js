import './style.scss';

function Home() {
  return ( 
    <main className="home">
      <h1>Pade d'accueil</h1>
      <h2>Exemple de données utilisateurs</h2>
      <ul>
        <li>
          <a href="/user/12">Utilisateur Karl</a>
        </li>
        <li>
          <a href="/user/18">Utilisateur Cecilia</a>
        </li>
      </ul>
    </main>
  );
}

export default Home;

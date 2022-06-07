import './App.css';
import Logo from '../src/assets/img/logo-sportsee.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="Logo de Sport See" />
        <p>
          SportSee
        </p>
      </header>
    </div>
  );
}

export default App;

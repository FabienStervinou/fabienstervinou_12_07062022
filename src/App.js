import './App.scss';
import Header from './layout/Header/index.js';
import AsideMenu from './layout/AsideMenu/index.js';
import Home from './views/Home/index';
import User from './views/User/index';
import Error from './views/Error/index';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AsideMenu />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/user/:userId" element={<User/>} /> 
            <Route exact path="/404" element={<Error/>} /> 
            <Route exact path="*" element={<Navigate to="/404" replace={true} />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

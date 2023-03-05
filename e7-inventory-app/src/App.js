import './App.scss';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Calculator from './components/Calculator/Calculator.jsx'
import ReelSelector from './components/ReelSelector/ReelSelector.jsx'
import LevelSelector from './components/LevelSelector/LevelSelector.jsx'


const App = () => {

  return (
    <div className="container">
      <Header/>
      <Navbar/>
      <div className="hero">hero</div>
      <div className="equipment-selector">
        <ReelSelector />
        <LevelSelector />
      </div>
      <div className="main">
      <Calculator />
      </div>
      <div className="similar-item">display-similar-items</div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;

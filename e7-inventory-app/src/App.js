import './App.scss';
import Header from './components/header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';


const App = () => {

  return (
    <div className="container">
      <Header/>
      <Navbar/>
      <div className="hero">hero</div>
      <div className="equipment-selector">equipment</div>
      <div className="main">main</div>
      <div className="similar-item">display-similar-items</div>
      <div className="vertical-banner-main">Banner</div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;

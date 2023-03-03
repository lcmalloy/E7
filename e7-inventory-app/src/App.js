import './App.scss';
import Navbar from './components/navbar/Navbar.jsx'

function App() {

  return (
    <div className="container">
      <Navbar/>
      <div className="nav">nav</div>
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

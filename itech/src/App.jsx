import './App.css';
import Navbar from './components/Navbar';
import AnimatedRoutes from './Animatedroutes'
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

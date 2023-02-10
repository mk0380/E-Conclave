import './App.css';
import Footer from './components/Footer'
import Sponsers from './components/Sponsers'
import Schedule from './components/Schedule'
import Workshop from './components/Workshop'
import Speakers from './components/Speaker'
import Intro from './components/Intro'
import Home from './components/Home'
import Navbar from './components/Navbar/Navbar/navbar'
import About from './components/About';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About/>
      <Intro />
      <Speakers />
      <Workshop />
      <Schedule />
      <Sponsers />
      <Footer />
    </div>
  );
}

export default App;

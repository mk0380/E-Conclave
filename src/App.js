// import './App.css';
import Footer from './components/Footer/Footer'
import Sponsers from './components/Sponsers/Sponsers'
import Schedule from './components/Schedule/Schedule'
import Workshop from './components/Workshop/Workshop'
import Speakers from './components/Speakers/Speaker'
import Intro from './components/Introduction/Intro'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/navbar'
import About from './components/About/About';



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

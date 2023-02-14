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
// import Card  from './components/Card/Card'
import Flagship from './components/Flagship/Flagship'
import Contact from './components/Contact/contact'
import ReactGA from 'react-ga';

const TRACKING_ID = "G-JPRDFBJ750"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About/>
      <Flagship/>
      <Intro />
      <Speakers />
      <Workshop />
      <Schedule />
      <Sponsers />
      <Contact/>
      <Footer />
      {/* <Card/> */}
    </div>
  );
}

export default App;

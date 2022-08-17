
import './App.css'
import { Contact } from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { Portfolio } from './components/Portfolio';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <main className ="container-fluid main p-0">
        <Hero/>
        <Portfolio/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
      

    </div>
  );
}

export default App;

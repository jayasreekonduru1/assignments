import Home from './Home';
import Section from './Section';
import About from './About';
import SecondSection from './SecondSection';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is main app</h1>
      <Home/>
      <Section/>
      <About/>
      <SecondSection/>
      <Contact/>
    </div>
  );
}

export default App;

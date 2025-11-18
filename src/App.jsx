import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Circles from './components/Circles/Circles';
import News from './components/News/News';
import Founders from './components/Founders/Founders';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Circles />
      <News />
      <Founders />
      <CTA />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

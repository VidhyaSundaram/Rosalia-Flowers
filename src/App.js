import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Slider from './Components/Slider/Slider';
import Bestsellers from './Components/Bestsellers/Bestsellers';
import Collections from './Components/Collections/Collections';
import { useRef } from 'react';
import Floralelegance from './Components/Floralelegance/Floralelegance';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {

  const collectionsRef = useRef(null);

  const scrollToCollections = () => {
    collectionsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <Slider scrollToCollections={scrollToCollections} />
      <Bestsellers />
      <Floralelegance />
      <Collections ref={collectionsRef} />
      <Footer />
    </>
  );
}

export default App;

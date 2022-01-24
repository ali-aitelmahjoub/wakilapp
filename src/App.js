
import './App.css';
import Apropos from './Components/Apropos/Apropos';
import Contactus from './Components/ContactUs/Contactus';
import Header from './Components/Header/Header';
import PacksSection from './Components/PacksSection/PacksSection';
import { Stats } from './Components/Stats/Stats';
import Testimonial from './Components/Testimonial/Testimonial';


function App() {
  return (
    <>
    <Header/>
    <Stats/>
    <Contactus/>
    <Apropos/>
    <Testimonial/>
    <PacksSection/>
    </>
  );
}

export default App;

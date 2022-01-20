
import './App.css';
import Apropos from './Components/Apropos/Apropos';
import Contactus from './Components/ContactUs/Contactus';
import Header from './Components/Header/Header';
import { Stats } from './Components/Stats/Stats';


function App() {
  return (
    <>
    <Header/>
    <Stats/>
    <Contactus/>
    <Apropos/>
    </>
  );
}

export default App;

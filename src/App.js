import "./App.css";
import Apropos from "./Components/Apropos/Apropos";
import Contactus from "./Components/ContactUs/Contactus";
import Header from "./Components/Header/Header";
import Offres from "./Components/Offres/Offres";
import { Stats } from "./Components/Stats/Stats";

function App() {
  return (
    <>
      <Header />
      <Stats />
      <Apropos />
      <Offres />
      <Contactus />
    </>
  );
}

export default App;

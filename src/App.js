import './App.css';
import { Route, Routes} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Error from './Components/Error';
import {BrowserRouter} from "react-router-dom"
import Navbar from './Components/Navbar';
import TyCard from './Components/TyCard';
import Benifits from './Components/Benifits';
import GovPlolicy from './Components/GovPlolicy';


function App() {
  return (
<>
<BrowserRouter>
            <Navbar />
 <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
<Route exact path="/govpolicy" element={<GovPlolicy/>}/>
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about/Tycard" element={<TyCard/>} />
<Route exact path="/benifits" element={<Benifits/>}/>


          <Route exact path="*" element={<Error />} />
         
</Routes>
    </BrowserRouter>
</>
  );
}
export default App;

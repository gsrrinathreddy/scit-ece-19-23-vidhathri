import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Aboutus from './Pages/Aboutus';
import Qualifications from './Pages/Qualifications';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Aboutus" element={<Aboutus/>}/>
        <Route path="Qualifications" element={<Qualifications/>}/>
        <Route path="Skills" element={<Skills/>}/>
        <Route path="Experience" element={<Experience/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

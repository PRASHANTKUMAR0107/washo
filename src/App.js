import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'; 
import Home from './MyComponents/Home';
import About from './MyComponents/About';
import Navbar from './MyComponents/Navbar';
import Wash from './MyComponents/Wash';
import Iron from './MyComponents/Iron';
import DryClean from './MyComponents/DryClean';
import Footer from './MyComponents/Footer';
import Loginsignup from './MyComponents/Loginsignup';
import YourOrders from './MyComponents/YourOrders';

function App() {
  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Wash' element={<Wash/>} />
      <Route path='/Iron' element={<Iron/>} />
      <Route path='/DryClean' element={<DryClean/>} />
      <Route path='/loginsignup' element={<Loginsignup/>} />
      <Route path='/YourOrders' element={<YourOrders/>} />
    </Routes>
    <Footer/>
   </Router>
   </>
  );
}

export default App;

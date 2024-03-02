
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Process from './components/Process';
import Product from './components/Product';
import Img from './components/Img';
import Bg from './components/Bg';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Contact from './Contaact/Contact';
import AboutFarm from './AboutComponent/AboutFarm';
import AboutMission from './AboutComponent/AboutMission';
import AboutTeam from './AboutComponent/AboutTeam';
import Cage from './ServicesComponent/Cage';
import Feed from './ServicesComponent/Feed';
import AppTech from './ServicesComponent/AppTech';
import MIssion from './Nav/MIssion';
import Vision from './Nav/Vision';

function App() {
  return (

    <>
    <Navbar/>
  

   <Routes>
   <Route path='/' element={<Home/>}/>
    <Route path='/aboutfarm' element={<AboutFarm/>}/>
    <Route path='/aboutteam' element={<AboutTeam/>}/>
    <Route path='/aboutmission' element={<AboutMission/>}/>
    <Route path='/cage' element={<Cage/>}/>
    <Route path='/feed' element={<Feed/>}/>
    <Route path='/apptech' element={<AppTech/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
    
   </Routes>

 

   <Footer/>
    </>
  );
}

export default App;

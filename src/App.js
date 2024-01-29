
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login.jsx';
import CreateAccount from './components/CreateAccount.jsx';
import AllCombo from './components/AllCombo.jsx';
import Footer from './components/Footer.jsx';
import AllFruits from './components/AllFruits.jsx';
import AllVEgetable from './components/AllVEgetable.jsx';
import ExoticFruits from './components/ExoticFruits.jsx';
import Mushroom from './components/Mushroom.jsx';
import OrganicMicrogreen from './components/OrganicMicrogreen.jsx';
import SaladItems from './components/SaladItems.jsx';

function App() {
  return (
 <>
 <BrowserRouter>
 <NavigationBar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/create' element={<CreateAccount/>}/>
  <Route path='/allproduct' element={<AllCombo/>}/>
  <Route path='/allfruit' element={<AllFruits/>}/>
  <Route path='/allveg' element={<AllVEgetable/>}/>
  <Route path='/exoticfruit' element={<ExoticFruits/>}/>
  <Route path='/mushroom' element={<Mushroom/>}/>
  <Route path='/organicmicro' element={<OrganicMicrogreen/>}/>
  <Route path='/saladitems' element={<SaladItems/>}/>
 </Routes>
 <Footer/>
 
 
 
 </BrowserRouter>
 </>
  );
}

export default App;


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
 </Routes>
 <Footer/>
 
 
 
 </BrowserRouter>
 </>
  );
}

export default App;

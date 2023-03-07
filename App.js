import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import Shopify from './components/Shopify';
import AddUser from './components/AddUser';
import AllUSers from './components/AllUsers';

import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element=  {<Shopify/>}/>
        <Route path="/all" element = {<AllUSers/>}/>
        <Route path="add" element = {<AddUser/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

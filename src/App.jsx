import './App.css'
// import Banner from './components/Banner';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';

import {BrowserRouter,Routes,Route} from 'react-router'
import UserDetailsForm from './components/UserDetailsForm';
import { StrictMode } from 'react';
import Layout from './components/Layout/Layout';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/submitApplication' element={<UserDetailsForm/>}/>
      </Routes>
     </BrowserRouter>
    </>

  );
}

export default App;
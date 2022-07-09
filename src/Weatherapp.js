import './App.css';

import Navigation from './Components/Navigation'
import { Routes, Route } from "react-router-dom";
import Favor from './Components/Favor';
import Main from './Components/Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  

  return (
    <div className="App" style={{display:'flex',backgroundColor:'',flexFlow:'column',height:'100vh'}}>
      <Navigation />
     
      <Routes>
        <Route path='/' element={<Main/>} exact strict/>

         
       
        <Route path='/favor' element={<Favor/>} exact strict/>
          
        

      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;

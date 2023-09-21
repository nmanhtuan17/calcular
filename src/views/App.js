
import './App.scss'
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import WebFont from 'webfontloader'
import 'boxicons/css/boxicons.min.css';
import Login from './pages/login'
import Home from './pages/Home';
import AppLayout from '../components/layout/AppLayout';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import CalcularTuition from './pages/CalcularTuition';
import Calcular from './pages/Calcular';
function App() {
  
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins', 'Roboto', 'Chilanka']
      }
    })
  }, [])
  return (
    <div className="App row">
      <div className='col-lg-3'>
        <AppLayout />
      </div>
      <div className='col-lg-9'>
        <Routes>
          <Route path='/' element={<Login />} exact={true} />
          <Route path='/courses' element={<Home />}  />
          <Route path='/tuition' element={<CalcularTuition />} />
          <Route path='/tuition/:id' element={<Login />} />
          <Route path='/calcular' element={<Calcular />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
}

export default App;

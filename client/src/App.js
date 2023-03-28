
import './App.css';
import React, { useEffect} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import Doctorprofile from './pages/Doctorprofile';
import Profil from './pages/Profil'
import Doctors from './pages/Doctors';
import { useDispatch, useSelector } from 'react-redux'
import { getdoctorinfobyid } from './Redux/UserSlice';
import DetailsDoctor from './pages/DetailsDoctor';
import Appointement from './pages/Appointement';
function App() {
  const user = useSelector(state => state.AuthReducer.user)  

  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route   index element={<Home/>}     />
   
        <Route path='/Login' element={<Login/>}     />
        <Route path='/Register' element={<Register/>}     />
        <Route path='/Doctorprofile' element={ <PrivateRoute><Doctorprofile user={user}    /></PrivateRoute>}     />
        <Route path='/Doctorprofile/:idDoctor' element={ <PrivateRoute><DetailsDoctor/></PrivateRoute>}     />
        <Route path='/appointements' element={ <PrivateRoute ><Appointement /></PrivateRoute>}     />


        
        <Route path='/Profile' element={ <PrivateRoute><Profil user={user} /></PrivateRoute>}     />

        <Route path='/' element={ <Doctors/>}     />



      </Routes>
    </Router>
 
  );
}

export default App;

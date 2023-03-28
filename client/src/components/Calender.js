import React, { useState ,useEffect } from 'react';

import { TimePicker } from 'react-ios-time-picker';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AddAppointement} from '../Redux/AppointementSlice';
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { AllDoctors} from '../Redux/UserSlice';
import { Link } from '@mui/material';
import moment from "moment";


export default function Calendar({idDoctor}) {

//useEffect ==> []
    
    

useEffect(() => {

dispatch(AllDoctors())

}, []);


 
  const doctors=useSelector(state=>state.AuthReducer.users)
  const result = doctors.find(x => x._id===idDoctor);

    const [newAppointement, setNewAppointement] = useState({
      DoctorId:idDoctor,
      DoctorInfo:result,
      time:'',
      date:''
    })


    const dispatch = useDispatch()

   const navigate=useNavigate()
    


    
      const adding = (e) => {
        e.preventDefault()
      dispatch(AddAppointement(newAppointement)) 
      navigate('/appointements')
    
    
      }
      

    return (
      

     
        <div style={{display:'flex',flexDirection:'row',gap:'80px' }}> 
        <div> <h1 style={{ marginLeft:'0px',marginTop:'120px', fontSize:'30px'}}>Select Date & Time</h1></div>

<LocalizationProvider  style={{color:'black'}} dateAdapter={AdapterDayjs}>
      <DateCalendar  datepicker-format="mm/dd/yyyy"  onChange ={(newV)=> {setNewAppointement({...newAppointement, date:newV.$d.toLocaleDateString("fr") })}}/>
    </LocalizationProvider>
    

<div style={{marginTop:'120px'}}>
         <TimePicker style={{color:'white'}} onChange ={(newV)=> {setNewAppointement({...newAppointement,time:newV})}}/>
      </div>
     
        <Link style={{ height:'200px',width:'200px',marginTop:'120px',textDecoration:'none',color:'black'}} onClick={adding}> Book now</Link>
      </div>
      
    );
  };
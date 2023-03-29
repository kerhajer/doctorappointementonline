import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import { getmyappbypatient,getmyappbyDoctor,DeletingApp, Allmyappointement} from '../Redux/AppointementSlice'
import { useSelector } from 'react-redux'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button} from "react-bootstrap";
import Updatecard from '../components/Updatecard';

import { useNavigate } from 'react-router-dom';





const Appointement = () => {
    const dispatch = useDispatch()


    const  appDoctor= useSelector(state => state.Appointement.appDoctor)
    const  appPatient= useSelector(state => state.Appointement.appPatient)
    const user=useSelector(state => state.AuthReducer.user)
    const  appointements= useSelector(state => state.Appointement.appointements)

     



    //useEffect ==> []
    
    const navigate=useNavigate()


    useEffect(() => {
      (user?.Role=='Doctor')? 

      dispatch(getmyappbyDoctor()) && dispatch(Allmyappointement()) && navigate('/appointements')

      :

     dispatch(getmyappbypatient())&& dispatch(Allmyappointement()) && navigate('/appointements')
     


  }, []);
   

   

 
 

     
  return (

    <div >
   {( (appDoctor.length==0)&&(appPatient.length===0 ))? <h1>you have no appointements </h1>:

    <TableContainer component={Paper}>
            {(user.Role=='Doctor')?       

    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
       

          <TableCell align="start">Patient name </TableCell>
          <TableCell align="start">phonenumber</TableCell>

          <TableCell align="start">date</TableCell>
          <TableCell align="start">time</TableCell>
          <TableCell align="start">status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>

  
        {appDoctor.map((row) => (

          <TableRow
            key={row.DoctorId}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
           

            <TableCell align='start'>{row.owner.name} {row.owner.lastname} </TableCell>
            <TableCell align='start'>{row.owner.phonenumber}</TableCell>
            <TableCell align='start'>{row.date}</TableCell>
            <TableCell align='start'>{row.time}</TableCell>


            <TableCell align='start'>{row.status}</TableCell>
            <TableCell align='start'>  <Button onClick={()=> dispatch(DeletingApp(row._id))  } variant="danger">Delete</Button></TableCell>
            {user.Role=='Doctor'&& <TableCell align='start'>  
              <Updatecard Appointement={row}   /></TableCell>}


          </TableRow>
        ))}
     
      </TableBody>
    </Table>:  
     <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Doctor</TableCell>


          <TableCell align="start">date</TableCell>
          <TableCell align="start">time</TableCell>
          <TableCell align="start">status</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>

  
        {appPatient.map((roww) => (

          <TableRow
            key={roww.Doctor}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">

              <img  style= {{width:'25px',height:'25px',borderRadius:'100%',marginLeft:'30px'}} src={roww.DoctorInfo.Image.Image.imgUrl}/><br/>
            <small>{roww.DoctorInfo.name}{roww.DoctorInfo.lastname}</small> <br/>
            <small><i className="fas fa-phone-square"></i>{roww.DoctorInfo.phonenumber}</small> <br/>
            <small><i className="fas fa-phone-square"></i>{roww.DoctorInfo.specialization}</small> <br/>

            <small> <i className="fas fa-map-marker-alt"></i> {roww.DoctorInfo.city}   </small> 

            
            </TableCell>
       
            <TableCell align='start'>{roww.date}</TableCell>
            <TableCell align='start'>{roww.time}</TableCell>


            <TableCell align='start'>{roww.status}</TableCell>
            <TableCell align='start'>  <Button onClick={()=> dispatch(DeletingApp(roww._id))  } variant="danger">Delete</Button></TableCell>
       


          </TableRow>
        ))}
     
      </TableBody>
    </Table>          
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
  </TableContainer>

} 

   </div>









     

   



  )
}

export default Appointement
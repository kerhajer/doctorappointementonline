import { Button, Modal } from "react-bootstrap";
import React, {useState } from 'react'

import { useDispatch } from "react-redux";
import {UpdatingApp } from "../Redux/AppointementSlice";
import { TimePicker } from 'react-ios-time-picker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Updatecard = ({Appointement}) => {
    const dispatch= useDispatch()
    const [updatedapp, setUpdatedapp] = useState({
        _id: Appointement._id,
        
        time:'Appointement.time',
        date:'Appointement.date',
        status:''

    })


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Updating=()=>{
    dispatch(UpdatingApp(updatedapp))
    handleClose()
  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h1>Update Appointement</h1>

        </Modal.Header>
        <Modal.Body>
        <div style={{display:'flex',flexDirection:'row',gap:'10px' }}> 
        <div> <h1 style={{ marginLeft:'0px',marginTop:'120px', fontSize:'30px'}}>Select Date & Time</h1></div>

<div style={{marginLeft:'0px'}} >
<LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DateCalendar    onChange ={(newV)=> {setUpdatedapp({...updatedapp,date:newV.$d.toLocaleDateString("fr")})}}/>
    </LocalizationProvider>
</div>


<div style={{marginTop:'150px'}}>
<TimePicker onChange ={(newV)=> {setUpdatedapp({...updatedapp,time:newV})}}/>
      </div>

<div style={{marginTop:'150px'}}>
<Box sx={{ minWidth: 150 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">status</InputLabel>
                    <Select
                      name='status'
                      labelId="status"
                      id="staus"
                      label="status"
                      type="text"
                      onChange ={(e)=> {setUpdatedapp({...updatedapp,status:e.target.value})}}

                    
                    >

                      <MenuItem  value={'confirmed'} >confirmed</MenuItem>
                      <MenuItem value={'rejected'}>rejected</MenuItem>
                   
                      </Select>
                  </FormControl>


                </Box>
</div>
<Modal.Footer style={{marginTop:'150px'}}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> 
          <Button variant="primary" onClick={Updating}>
            update
          </Button>
        </Modal.Footer>

      </div> 
      
  
    
        </Modal.Body>
  
      </Modal>
    </div>
  );
};

export default Updatecard;
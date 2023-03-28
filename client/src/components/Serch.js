import React , { useState } from 'react'
import '../css/index.css'
import Searchcity from './searchcity'
import Searchdoctor from './Searchdoc'


import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import SearchIcon from '@mui/icons-material/Search';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';





const Serch = () => {
  const [appointment, setAppointement] = useState(dayjs('2022-04-17T15:30'));
  return (
     <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: '5px' }}>

    <button className="grid-20">Find</button>
    <div>< Searchdoctor /></div>
    <button className="grid-20"> <LocationSearchingIcon style={{ height: '15px', width: '15px' }} />in</button>
    <div> <Searchcity /></div>
    <button className="grid-20"> Time</button>
    <div style={{ minWidth: 250,padding:'0px' }}>
                <LocalizationProvider  dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimePicker','DateTimePicker']}>

                        <DateTimePicker 
                            label="date time"
                            value={appointment}
                            onChange={(newValue) => setAppointement(newValue)}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </div>
    <button className="grid-100 btn">
        <SearchIcon style={{ height: '20px', width: '20px' }} /> Search
    </button>


    

</div>

  )
}

export default Serch
   
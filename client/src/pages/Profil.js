import React from 'react'
import { useSelector } from 'react-redux'
import '../App.css';
import Serch from '../components/Serch';
import Doctors from './Doctors';

const Profil = ({user} ) => {
  return (
    <div className='profile' style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', gap: '20px' }} >
      <div style={{ display:'flex',justifyContent:'center'}}>
        <div  ><h3>  <strong> {user.name.toUpperCase()} , welcome to your AllDoctopro </strong>   </h3>

          <p>  Find, compare and book in-network doctors </p>
        </div>

      </div>

      <div style={{ marginLeft: '200px', marginTop: '50px'}}><Serch /></div>

      <div className="card " key={user._id} style={{ width: '100rem' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }} >


            <div style={{marginLeft:'25px'}} >     
              <h5  style={{fontSize:'25px',textAlign:'center'}} className="mb-0"> {user.name} {user.lastname}  </h5> 
              <small>  {user.age} years old  </small> <br/>
              <small>  {user.email}   </small><br/>



              </div>
              </div>

              </div>
              <div style={{backgroundColor:'#F7F8F9', height:'600px',width:'1600px'}}> <Doctors /></div>

    </div>

  )
}

export default Profil
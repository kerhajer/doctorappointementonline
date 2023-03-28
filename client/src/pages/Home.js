import React from 'react'
import '../App.css';
import Serch from '../components/Serch';
import Doctors from './Doctors';




const Home = () => {
   

    return (
        

        <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'start', gap: '20px' }}>
            <div ><h2>  <strong>Book Top Doctors Near Me in Tunisia </strong>   </h2>
                <p>  Need to make an Doctor appointment this week?
                    Use  ALLDoctopro to find <br>
                    </br> all Doctor you need in Tunisia.
                    It’s simple, secure and free </p></div>


            <div className='container' >
                <h1> <strong> Find local </strong></h1>
                <section className='animation'>
                    <div className='first'><div>Dermatologists</div></div>
                    <div className="second"><div>Dentists</div></div>
                    <div className="third"><div>Cardiologue</div></div>

                    <div className="firth"><div>Doctors</div></div>
                </section>
                <br />
            </div>

            <div style={{ marginLeft: '0px' }}><Serch /></div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>      <br></br>
          <br></br>      <br></br>
          <br></br>      <br></br>
          <br></br>      <br></br>
          <br></br>

           <div style={{backgroundColor:'#F7F8F9', height:'600px',width:'1600px'}}> <Doctors /></div>
          
 
    



        </div>
    )
}

export default Home
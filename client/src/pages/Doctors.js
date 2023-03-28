
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AllDoctors } from '../Redux/UserSlice'
import { useSelector } from 'react-redux'
import '../css/card.css';
import { Link } from 'react-router-dom'

const Doctors = () => {
  
  const dispatch = useDispatch()
 

  //useEffect ==> []
  useEffect(() => {
    dispatch(AllDoctors())
    //first render / when we refresh
  }, [])

  const users = useSelector(state => state.AuthReducer.users)



  return (
<div style={{ display: 'flex', flexDirection: 'row',justifyContent: 'start'  ,gap:'5px' }}>

<div>

<h1 style={{marginLeft:'50px',marginTop:'100px',marginRight:'0'}}>  <strong> Top-Doctors</strong></h1>
   <p  style={{marginLeft:'30px'}}>90% of patients gave these doctors 5 stars </p>      


</div>
 








    <div className='cards'  style={{ display: 'flex', justifyContent: 'start',gap:'5px' }}>

      {users?.map(el =>
        <div className="card "  key={el._id} style={{ width: '40rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }} >

            <img className="imgg"
              src={el.Image ? el.Image.Image.imgUrl : "https://www.freeiconspng.com/thumbs/doctor-logo/doctor-pediatrician-icon-round-dr-logo-7.png"} />

            <div>      <small className='high'>     <i className="fa fa-star"></i> HIGHLY RECOMENDED </small>
              <h5 className="mb-0"> Dr. {el.name.toUpperCase()} {el.lastname.toUpperCase()} </h5>
              <small>  {el.specialization}   </small>


              <br />
              <small> <i className="fas fa-map-marker-alt"></i> {el.city}   </small>

              <br />
              <small> <i className="fas fa-phone-square"></i> {el.phonenumber}   </small>


              <div className="ratings mt-2">

                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>

              </div>

              <div className="mt-4 apointment">

                <Link to={`/Doctorprofile/${el._id}`}  style={{textDecoration:'none'}}        className="book">MORE DETAILS</Link>

              </div>
          

            </div>
          </div>








        </div>)}

    </div>


    </div>



  )
}

export default Doctors 
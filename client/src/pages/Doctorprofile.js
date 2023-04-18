import React, { useState, useEffect } from 'react'
import '../css/doctor.css';
import { useSelector } from 'react-redux'
import { AllDoctors } from '../Redux/UserSlice';
import { useDispatch } from 'react-redux'
import Updateprofile from "../components/Updateprofile"

const Doctorprofile = ({ user }) => {
    const users = useSelector(state => state.AuthReducer.users)

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(AllDoctors())






    }, []);
    return (
        <div style={{
            background: '#e9e9e9'
        }} >


            <div className="containerd">
                <div className="profile-header">
                    <div className="profile-img">
                        <img src={user.Image ? user.Image.Image.imgUrl : (user.Role == 'Doctor') ? "https://www.freeiconspng.com/thumbs/doctor-logo/doctor-pediatrician-icon-round-dr-logo-7.png" : 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png'}
                            alt="Profile Image" />
                    </div>
                    <div className="profile-nav-info">
                        <h1 className="user-name">Dr. {user.name} {user.lastname} </h1>
                        <h1 id="state" className="state">{user.specialization}  </h1>
                        <div className="address">

                            <small style={{ marginLeft: '150px' }} id="state" className="state">    <i className="fas fa-map-marker-alt"></i> {user.city}  </small><br></br>
                            <small id="state" className="state">    {user.address}  </small>

                        </div>

                    </div>
                    <div className="profile-option">
                        <div className="notification">
                            <i className="fa fa-bell"></i>
                            <span className="alert-message">3</span>
                        </div>
                    </div>
                </div>

                <div className="main-bd">
                    <div className="left-side">
                        <div className="profile-side">
                            <p className="mobile-no"><i className="fa fa-phone"></i> {user.phonenumber}   </p>
                            <p className="user-mail"><i className="fa fa-envelope"></i> {user.email} </p>
                            <div className="user-bio">
                                <h3 style={{ marginLeft: '0px' }}>Bio</h3>
                                <small style={{ textJustify: '5px' }} className="bio">
                                    Lorem ipsum dolor sit amet, hello how consectetur adipisicing elit. Sint consectetur provident magni yohoho consequuntur, voluptatibus ghdfff exercitationem at quis similique. Optio, amet!
                                </small>
                            </div>

                            <div className="profile-btn">
                                <button className="chatbtn" id="chatBtn"><i className="fa fa-comment"></i> Chat</button>
                                <button className="createbtn" id="Create-post"><i className="fa fa-plus"></i> Create</button>
                            </div>
                            <div className="user-rating">
                                <h3 className="rating">4.5</h3>
                                <div className="rate">
                                    <div className="star-outer">
                                        <div className="star-inner">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <span className="no-of-user-rate"><span>123</span>&nbsp;&nbsp;reviews</span>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="right-side">

                        <div className="panel with-nav-tabs panel-info">
                            <div class="panel-heading">
                                <ul className="nav nav-tabs">
                                    <li className="user-post active"><a href="#tab0" data-toggle="tab">  Experience </a></li>
                                    <li className="user-setting">   <a href="#tab1" data-toggle="tab">  Settings</a> </li>

                                </ul>

                            </div>
                            <div className="panel-body" style={{
                                background: '#e9e9e9'
                            }} >
                                <div class="tab-content">
                                    <div className="tab-pane fade in active" id="tab0">

                                        <div className="Education-item">
                                            <h3>Work & Experience</h3>  <br /> <br />
                                            <div className="new-dive">
                                                <div className="deserve-content">
                                                    <div>
                                                        <div>
                                                            <strong style={{ marginLeft: '150px' }}>Glowing Smiles family Dental Clinic</strong> <br />
                                                            <small style={{ marginLeft: '150px' }}>2010 - Present (5 years)</small>
                                                        </div><br /><br />
                                                        <div data-counter="">
                                                            <strong style={{ marginLeft: '150px' }}>Comfort Care Dental Clinic</strong> <br />
                                                            <small style={{ marginLeft: '150px' }}>2007 - 2010 (3 years)</small>

                                                        </div> <br /> <br />
                                                        <div>
                                                            <strong style={{ marginLeft: '150px' }}>Dream Smile Dental Practice</strong> <br />
                                                            <small style={{ marginLeft: '150px' }}>2005 - 2007 (2 years)</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="Education-item">
                                            <h3>Awards</h3> <br /> <br />
                                            <div className="new-dive">
                                                <div className="deserve-content">
                                                    <div>
                                                        <div>
                                                            <strong style={{ marginLeft: '150px' }} className="Year-text">July 2019</strong>  <br />
                                                            <p style={{ marginLeft: '150px', color: 'black' }} className="text-color">Humanitarian Award</p>  <br />
                                                            <p style={{ marginLeft: '150px', color: 'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p> <br />
                                                        </div>  <br /> <br />
                                                        <div>
                                                            <strong style={{ marginLeft: '150px' }} className="Year-text">March 2011</strong> <br />
                                                            <p style={{ marginLeft: '150px', color: 'black' }} className="text-color">Certificate for International Volunteer Service</p> <br />
                                                            <p style={{ marginLeft: '150px', color: 'black' }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p> <br />
                                                        </div> <br /> <br />
                                                        <div>
                                                            <strong style={{ marginLeft: '150px' }} className="Year-text">May 2008</strong> <br />
                                                            <p style={{ marginLeft: '150px', color: 'black' }} className="text-color">The Dental Professional of The Year Award</p> <br />
                                                            <p style={{ marginLeft: '150px', color: 'black' }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p> <br />

                                                        </div>  <br /> <br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-lg-10">
                                                <div className="service-list">
                                                    <h3>Services</h3>
                                                    <ul style={{ color: 'black' }} className="clearfix">
                                                        <p style={{ color: 'black' }} >Tooth cleaning</p>
                                                        <p style={{ color: 'black' }}>Root Canal Therapy</p>
                                                        <p style={{ color: 'black' }}>Implants</p>
                                                        <p style={{ color: 'black' }}>Composite Bonding</p>
                                                        <p style={{ color: 'black' }}>Fissure Sealants</p>
                                                        <p style={{ color: 'black' }}>Surgical Extractions</p>
                                                    </ul>
                                                </div>
                                                <div className="service-list">
                                                    <h3>Specializations</h3>
                                                    <ul className="clearfix">
                                                        <p style={{ color: 'black' }}>Children Care</p>
                                                        <p style={{ color: 'black' }}>Dental Care</p>
                                                        <p style={{ color: 'black' }}>Oral and Maxillofacial Surgery</p>
                                                        <p style={{ color: 'black' }}>Orthodontist</p>
                                                        <p style={{ color: 'black' }}>Periodontist</p>
                                                        <p style={{ color: 'black' }}>Prosthodontics</p>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                           

                        </div>



                        <div className="user-setting"   id="tab1">
                      <Updateprofile user={user} />
                            </div>

                    </div>
                </div>

            </div>



        </div >
    )
}

export default Doctorprofile
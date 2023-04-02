import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOut } from '../Redux/UserSlice'
import { useSelector } from 'react-redux'





export default function MenuAppBar() {
  const navigate = useNavigate()
  const user = useSelector(state=> state.AuthReducer.user)

  const isAuth = localStorage.getItem('isAuth')
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [ischeked,setIscheked]= React.useState(false)
  const handleChange = (event) => {
    setIscheked(event.target.checked);
    if (!ischeked) {
      dispatch(logOut())
      navigate('/')
    }

  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>

      <Box >


        <AppBar position="static" style={{ background: 'none'}}>
          <Toolbar>
            <img  src='/logo.png'  style={{ width: '5%'}}/ >

            <Typography as={Link} to="/" style={{
              color: '#747474', fontFamily: 'Work Sans,Arial,sans-serif', fontSize: '.9375rem',
              fontWeight: ' 400', textDecoration: 'none'
            }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
           
          
         
         
            {isAuth ? <>
             
              <Typography as={Link}  to={ (user.Role=='Doctor')   ?  "/Doctorprofile" : "/Profile"} style={{
                color: '#747474', fontFamily: 'Work Sans,Arial,sans-serif', fontSize: '.9375rem',
                fontWeight: ' 400', textDecoration: 'none'
              }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
               Profile
              </Typography>
              <Typography   as={Link} to=  '/appointements' style={{
                color: '#747474', fontFamily: 'Work Sans,Arial,sans-serif', fontSize: '.9375rem',
                fontWeight: ' 400', textDecoration: 'none'
              }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Appointement
              </Typography>
              
              
              <FormGroup style={{ color: '#747474' }}>
                    <FormControlLabel

                      control={
                        <Switch

                          checked={ischeked}
                          onChange={handleChange}
                          aria-label="login switch"
                          style={{ color: '#747474' }}
                         
                        />
                      }
                      label={'Logout'}

                    />
                  </FormGroup>
            
            
            
            </> :
            <>
             <Typography as={Link} to='/Register' style={{
                  color: '#747474', fontFamily: 'Work Sans,Arial,sans-serif', fontSize: '.9375rem',
                  fontWeight: ' 400', textDecoration:'none'
                }} variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
                  Register
                </Typography>
                <Typography as={Link} to='/Login' style={{
                  color: '#747474', fontFamily: 'Work Sans,Arial,sans-serif', fontSize: '.9375rem',
                  fontWeight: ' 400', textDecoration:'none'
                }} variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
                  Login
                </Typography>
            </>

              
              
          


              
                
              

          
            }
    
          {isAuth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  style={{
                    color: '#747474', fontFamily: 'Work Sans,Arial,sans-serif', fontSize: '.9375rem',
                    fontWeight: ' 400'
                  }}
                >
               
                 { (user.Role=='Doctor')?
                 <img style= {{width:'25px',height:'25px',borderRadius:'100%'}} 
                 src={user.Image ? user.Image.Image.imgUrl : (user.Role=='Doctor')? 
                 "https://www.freeiconspng.com/thumbs/doctor-logo/doctor-pediatrician-icon-round-dr-logo-7.png" : 
                 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png' }  /> : 
                 <img style= {{width:'25px',height:'25px',borderRadius:'100%'}  }
                 src={user.Image ? user.Image.Image.imgUrl :<AccountCircle/>} /> }



                 { (user.Role=='Doctor')?
                 <p style= {{fontSize:'12px',margin:'0'}} 
                 
                > DR {user.name} </p> :  <p style= {{fontSize:'10px',margin:'0',color:'black'}}
                 
                >{user.name }</p>   }
                
                
                
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}

                >
                  <MenuItem  style={{
                    color: '#747474', fontFamily: 'Work Sans,Arial,sans-serif', fontSize: '.9375rem',
                    fontWeight: ' 400'
                  }} onClick={handleClose} > profile  </MenuItem>
                  <MenuItem  style={{
                    color: '#747474', fontFamily: 'Work Sans,Arial,sans-serif', fontSize: '.9375rem',
                    fontWeight: ' 400'
                  }} onClick={handleClose} > Setting account </MenuItem>







                </Menu>

              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}


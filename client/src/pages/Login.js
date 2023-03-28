import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { signingIn } from '../Redux/UserSlice';
import {useNavigate} from 'react-router-dom'
import { Alert } from 'react-bootstrap';
import '../App.css';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Login = () => {
  const userr = useSelector(state=> state.AuthReducer.user)
  const Errors = useSelector(state=> state.AuthReducer.LoginErrors)
  const navigate = useNavigate()
  const isAuth = localStorage.getItem('isAuth')
  
  useEffect(()=>{
    isAuth &&  (userr?.Role=='Doctor')  && navigate('/Doctorprofile')  
    isAuth &&  (userr?.Role=='Patient')  && navigate('/Profile')  
  },[isAuth])

  const dispatch = useDispatch()
  const [user, setUser] = useState({})
  const HandleChange = (e)=>{
    setUser({...user, [e.target.name] : e.target.value})
  }
  const LoginIn = (e)=>{
    e.preventDefault()
    dispatch(signingIn(user))
 
  }
  return (
    <div >
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs"style={{ marginTop:'0',marginLeft:'200px' }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1,bgcolor: '#00b39b' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={HandleChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            {Errors && <Alert variant='danger'>{Errors.email.msg}</Alert>}
            <TextField
              onChange={HandleChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
              { Errors &&<Alert variant='danger'>{Errors.password.msg}</Alert>}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type='submit'
              onClick={LoginIn}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,bgcolor: '#00b39b'}}
            >
              LOG IN
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='/register' variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  )
}

export default  Login 
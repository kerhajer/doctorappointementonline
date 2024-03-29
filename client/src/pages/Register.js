import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { signingUp } from '../Redux/UserSlice';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" {...props}>
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


const Register = () => {

  const msg = useSelector(state => state.AuthReducer.msg)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const [newUser, setNewUser] = useState({})
  const [image, setImage] = useState('')


  const HandleChangeimage = (e) => {
    setImage(e.target.files[0])

  }
  const HandleChange = (e) => {

    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }
  const Registering = (e) => {
    e.preventDefault()

    const formData= new FormData()
    formData.append('Image',image)
    formData.append('email',newUser.email)
    formData.append('address',newUser.address)
    formData.append('password',newUser.password)
    formData.append('age',newUser.age)
    formData.append('phonenumber',newUser.phonenumber)
    formData.append('Role',newUser.Role)
    formData.append('city',newUser.city)
    formData.append('name',newUser.name)
    formData.append('lastname',newUser.lastname)

    formData.append('specialization',newUser.specialization)
    formData.append('experience',newUser.experience)
    formData.append('feePerCunsultation',newUser.feePerCunsultation)


    dispatch(signingUp(formData))

   
    navigate('/Login')

  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" style={{ marginTop:'0',marginLeft:'200px' }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Avatar sx={{ m: 1, bgcolor: '#00b39b' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <br />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Are you ?</InputLabel>
                <Select
                  name='Role'
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Are you?"
                  onChange={HandleChange}

                >

                  <MenuItem value={'Doctor'}>Doctor</MenuItem>
                  <MenuItem value={'Patient'}>Patient</MenuItem>
                </Select>
              </FormControl>


            </Box>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField

                    onChange={HandleChange}
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField

                    onChange={HandleChange}
                    autoComplete="given-name"
                    name="lastname"
                    required
                    fullWidth
                    id="lastname"
                    label="lastname"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={HandleChange}
                    required
                    fullWidth
                    id="age"
                    label="age"
                    name="age"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={HandleChange}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={HandleChange}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={HandleChange}
                    required
                    fullWidth
                    name="address"
                    label="address"
                    type="text"
                    id="address"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    onChange={HandleChange}
                    required
                    fullWidth
                    name="phonenumber"
                    label="phonenumber"
                    type="text"
                    id="phonenumber"
                  />
                </Grid>
              <br/>  <br/>
              <input    style={{marginLeft:'20px',marginTop:'13px',color:'green'}} onChange={HandleChangeimage} name='Image'  type='file' accept='image/*'/>

              </Grid>
              {newUser.Role == 'Doctor' && <Grid style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }} item xs={12}>


                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Doctorpecialization</InputLabel>
                    <Select
                      name='specialization'
                      labelId="specialization"
                      id="specialization"
                      label="doctorspecialization"
                      type="text"
                      onChange={HandleChange}


                    >

                      <MenuItem value={'Cardiologue(coeur)'} >Cardiologue(coeur)</MenuItem>
                      <MenuItem value={'Radiologue'}>Radiologue</MenuItem>
                      <MenuItem value={'Ophtalmologue'}>Ophtalmologue</MenuItem>
                      <MenuItem value={'Gynécologue'}>Gynécologue</MenuItem>
                      <MenuItem value={'Urologue'}>Urologue</MenuItem>
                      <MenuItem value={'Neurologue'}     >Neurologue</MenuItem>
                      <MenuItem value={'Pneumologue'} >Pneumologue</MenuItem>
                      <MenuItem value={'Psychiatre'}>Psychiatre</MenuItem>
                      <MenuItem value={'Urgentiste'} >Urgentiste</MenuItem>

                      <MenuItem value={'Médecin homéopathe'}>Médecin homéopathe</MenuItem>
                      <MenuItem value={'Médecin légiste'}>Médecin légiste</MenuItem>
                      <MenuItem value={'Médecin ostéopathe'}>Médecin ostéopathe</MenuItem>
                      <MenuItem value={'Inception'} >Inception</MenuItem>
                      <MenuItem value={'Endocrinologue'} >Endocrinologue</MenuItem>
                      <MenuItem value={'Gérontologue'}>Gérontologue</MenuItem>
                      <MenuItem value={'Omnipraticien / Omnipraticienne'} >Omnipraticien / Omnipraticienne</MenuItem>
                      <MenuItem value={'Gynécologue-obstétricien / Gynécologue-obstétricienne'}>Gynécologue-obstétricien / Gynécologue-obstétricienne</MenuItem>
                      <MenuItem value={'Oto-rhino-laryngologiste'}>Oto-rhino-laryngologiste</MenuItem>
                      <MenuItem value={'Médecin immunologue'}




                      >Médecin immunologue</MenuItem>
                      <MenuItem value={'Hématologue'}  >Hématologue</MenuItem>
                      <MenuItem value={"Neurochirurgien / Neurochirurgienne  "} >Neurochirurgien / Neurochirurgienne </MenuItem>
                      <MenuItem value={'Médecin thermal  '}
                      >Médecin thermal</MenuItem>
                      <MenuItem value={'Allergologue  '}
                      >Allergologue</MenuItem>
                      <MenuItem value={'Médecin en pharmacovigilance'}>Médecin en pharmacovigilance</MenuItem>
                      <MenuItem value={'Médecin généraliste'} >Médecin généraliste</MenuItem>
                      <MenuItem value={'Pédopsychiatre'} >Pédopsychiatre</MenuItem>
                      <MenuItem value={'Rhumatologue'} >Rhumatologue</MenuItem>
                      <MenuItem value={'Médecin acupuncteur'}



                      >Médecin acupuncteur</MenuItem>
                      <MenuItem value={'Médecin néphrologue'}  >Médecin néphrologue</MenuItem>
                      <MenuItem value={'Pédiatre'} >Pédiatre</MenuItem>
                      <MenuItem value={'Gastro-entérologue'} >Gastro-entérologue</MenuItem>
                      <MenuItem value={'Dermatologue'}>Dermatologue</MenuItem>











                 
                 


                    </Select>
                  </FormControl>


                </Box>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">city</InputLabel>
                    <Select
                    
                      name='city'
                      labelId="city"
                      id="city"
                      label="grandtunis"
                      type="text"
                      onChange={HandleChange}


                    >

                      <MenuItem value={'Le Bardo'} >Le Bardo</MenuItem>
                      <MenuItem value={'Centre Urbain Nord'}>Centre Urbain Nord</MenuItem>
                      <MenuItem value={'La Marsa'}>La Marsa</MenuItem>
                      <MenuItem value={'les Berges Du Lac 2'}>les Berges Du Lac 2</MenuItem>
                      <MenuItem value={"L'aouina"}> L'aouina</MenuItem>
                      <MenuItem value={'Hammam Lif'}     >Hammam Lif</MenuItem>
                      <MenuItem value={'Arianna Ville'} >Arianna Ville</MenuItem>
                      <MenuItem value={'Tunis Belvidere'}>Tunis Belvidere</MenuItem>
                      <MenuItem value={'Ain Zagouan '} >Ain Zagouan </MenuItem>
                      <MenuItem value={'Cité El Ghazala'} >Cité El Ghazala'</MenuItem>

                      <MenuItem value={'Cité El Ghazala'} >Cité El Ghazala</MenuItem>
                      <MenuItem value={'Cité Ennasr 2'}>Cité Ennasr 2</MenuItem>
                      <MenuItem value={'El Manar 1'}>El Manar 1</MenuItem>
                      <MenuItem value={'Ezzahra'}>Ezzahra</MenuItem>
                      <MenuItem value={'La Soukra'} >La Soukra</MenuItem>
                      <MenuItem value={'Les Berges Du Lac'} >Les Berges Du Lac</MenuItem>
                      <MenuItem value={'Carthage'}>Carthage</MenuItem>
                      <MenuItem value={'El Manar 2'} >El Manar 2</MenuItem>
                      <MenuItem value={'El Mourouj 5'}>El Mourouj 5</MenuItem>
                      <MenuItem value={'Montplaisir'}>Montplaisir</MenuItem>
                      <MenuItem value={'Mutuelleville'}>Mutuelleville</MenuItem>
                      <MenuItem value={'Nouvelle Medina'}  >Nouvelle Medina</MenuItem>
                      <MenuItem value={"Bab Bhar "} >Bab Bhar</MenuItem>
                      <MenuItem value={'Ben Arous   '}
                      >Ben Arous </MenuItem>
                      <MenuItem value={'El Menzah 9   '}
                      >El Menzah 9 </MenuItem>
                      <MenuItem value={'Fouchana'}>Fouchana</MenuItem>
                      <MenuItem value={'Jardins de Carthage'} >Jardins de Carthage</MenuItem>
                      <MenuItem value={'Mannouba'} >Mannouba</MenuItem>
                      <MenuItem value={'Borj Louzir'} >Borj Louzir</MenuItem>
                      <MenuItem value={'Charguia 1'}>Charguia 1</MenuItem>
                      <MenuItem value={'BouMhel'}>BouMhel</MenuItem>
                      <MenuItem value={'Cite El Ghazala 1'}>Cite El Ghazala 1</MenuItem>
                      <MenuItem value={'Cite El Khadra'}>Cite El Khadra</MenuItem>
                      <MenuItem value={'Dar Fadhal'}>Dar Fadhal</MenuItem>
                      <MenuItem value={'Cité les Palmerais'}>Cité les Palmerais</MenuItem>

                      <MenuItem value={'Denden'}>Denden</MenuItem>
                      <MenuItem value={'El Menzah'}>El Menzah</MenuItem>
                      <MenuItem value={'El Menzah 5'}>El Menzah 5</MenuItem>
                      <MenuItem value={'El Menzah 6'}>El Menzah 6</MenuItem>
                      <MenuItem value={'El Menzah 8'}>El Menzah 8</MenuItem>
                      <MenuItem value={'El Mourouj 3'}>El Mourouj 3</MenuItem>
                      <MenuItem value={'El Mourouj 4'}>El Mourouj 4</MenuItem>
                      <MenuItem value={'El Mourouj 6'}>El Mourouj 6</MenuItem>
                      <MenuItem value={'El Omrane Superieur'}>El Omrane Superieur</MenuItem>
                      <MenuItem value={'Jedaida'}>Jedaida</MenuItem>
                      <MenuItem value={'El Hrairia'}>El Hrairia</MenuItem>
                      <MenuItem value={'Le Kram'}>Le Kram</MenuItem>
                      <MenuItem value={'Megrine'}>Megrine</MenuItem>
                      <MenuItem value={'Mnihla'}>Mnihla</MenuItem>
                      <MenuItem value={'Monfleury'}>Monfleury</MenuItem>
                      <MenuItem value={'Oued Ellil'}>Oued Ellil</MenuItem>
                      <MenuItem value={'Rades'}>Rades</MenuItem>
                      <MenuItem value={'Riadh Andalous'}>Riadh Andalous</MenuItem>

                    </Select>
                  </FormControl>


                </Box>


                <TextField
                  onChange={HandleChange}
                  required
                  fullWidth
                  name="experience"
                  label="experience"
                  type="text"
                  id="experience"
                />
       

                <TextField
                  onChange={HandleChange}
                  required
                  fullWidth
                  name="feePerCunsultation"
                  label="feePerCunsultation"
                  type="text"
                  id="feePerCunsultation"
                />








              </Grid>}
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={Registering}
                style={{ backgroundColor: '#00b39b' }}

              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {msg && <Alert key={'success'} variant={"success"}>{msg}</Alert>}
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default Register
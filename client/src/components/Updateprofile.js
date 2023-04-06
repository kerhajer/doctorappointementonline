import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updatedoctorprofile } from "../Redux/UserSlice";
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CssBaseline from '@mui/material/CssBaseline';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';




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

const Updateddoctorprofile = ({user}) => {
    const dispatch= useDispatch()
    const navigate = useNavigate()

    const [updatedUser, setUpdatedUser] = useState({
        _id: user._id,
       name:user.name,
       lastname:user.lastname,
       email:user.email,
       age:user.age,
       phonenumber:user.phonenumber,
       password:user.password,
       specialization:user.specialization,
       feePerCunsultation:user.feePerCunsultation,
       address:user.address,
       city:user.city,
       experience:user.experience,


    })


    const [image, setImage] = useState(user.Image.Image.imgUrl)


    const HandleChangeimage = (e) => {
      setImage(e.target.files[0])
  
    }
    const HandleChange = (e)=>{
        setUpdatedUser({...updatedUser, [e.target.name]: e.target.value})
    }

 


  const Updating = (e) => {
    e.preventDefault()

    dispatch(updatedoctorprofile(updatedUser))

navigate('/Doctorprofile/:idDoctor')
   

  }

  return (
    <div>
       

  
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" style={{ marginTop:'0' }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

         
          
            <br />
           

            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    defaultValue={user.name}
                    onChange={HandleChange}
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    defaultValue={user.lastname}

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
                                      defaultValue={user.age}

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
                    defaultValue={user.email}

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
                    defaultValue={user.password}

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
                        defaultValue={user.address}

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
            defaultValue={user.phonenumber}

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
              <input    style={{marginLeft:'20px',marginTop:'13px',color:'green'}}    
onChange={HandleChangeimage} name='Image'  type='file' accept='image/*'/>

              </Grid>

                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Doctorpecialization</InputLabel>
                    <Select
                     defaultValue={user.specialization}

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
                      <MenuItem value={'Médecin acupuncteur'}>Médecin acupuncteur</MenuItem>
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
                              defaultValue={user.city}

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
                     defaultValue={user.experience}

                  onChange={HandleChange}
                  required
                  fullWidth
                  name="experience"
                  label="experience"
                  type="text"
                  id="experience"
                />
       

                <TextField
                defaultValue={user.feePerCunsultation}

                  onChange={HandleChange}
                  required
                  fullWidth
                  name="feePerCunsultation"
                  label="feePerCunsultation"
                  type="text"
                  id="feePerCunsultation"
                />








              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={Updating}
                style={{ backgroundColor: '#00b39b' }}

              >
                update
              </Button>
        
            </Box>
          </Box>
        </Container>
      </ThemeProvider>


    
    
 
  

    </div>
  )
}

export default Updateddoctorprofile
;

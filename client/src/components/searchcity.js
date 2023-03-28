import  React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Box from '@mui/material/Box';

export default function FreeSoloCreateOption() {
  
  return (
    <div>
           
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">city</InputLabel>
                    <Select
                    
                      name='city'
                      labelId="city"
                      id="city"
                      label="grandtunis"
                      type="text"


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
                </div>


  );
}


import  React from 'react';
import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

 const Searchdoc = () => {


   return (



   
     <div>       <Box sx={{ minWidth:200}}>
     <FormControl fullWidth>
     <InputLabel id="demo-simple-select-label">Doctorspecialization</InputLabel>
     <Select
       name='specialization'
       labelId="specialization"
       id="specialization"
       label="doctorspecialization"

     >
     
       <MenuItem value= {'Cardiologue(coeur)'} >Cardiologue(coeur)</MenuItem>
       <MenuItem   value= {'Radiologue'}>Radiologue</MenuItem>
       <MenuItem   value= {'Ophtalmologue'}>Ophtalmologue</MenuItem>
       <MenuItem  value= {'Gynécologue'}>Gynécologue</MenuItem>   
       <MenuItem value= {'Urologue'}>Urologue</MenuItem> 
       <MenuItem  value= {'Neurologue'}     >Neurologue</MenuItem>
       <MenuItem   value= {'Pneumologue'} >Pneumologue</MenuItem>
       <MenuItem  value= {'Psychiatre'}>Psychiatre</MenuItem>
       <MenuItem value= {'Urgentiste'} >Urgentiste</MenuItem>
       <MenuItem   value= {'Médecin praticien'} >Médecin praticien'</MenuItem>
       <MenuItem   value= {'Médecin homéopathe'}>Médecin homéopathe</MenuItem>
       <MenuItem value= {'Médecin légiste'}>Médecin légiste</MenuItem>
       <MenuItem value= {'Médecin ostéopathe'}>Médecin ostéopathe</MenuItem>
       <MenuItem value= {'Inception'} >Inception</MenuItem>
       <MenuItem value= {'Endocrinologue'} >Endocrinologue</MenuItem>
       <MenuItem  value= {'Gérontologue'}>Gérontologue</MenuItem>
       <MenuItem value= {'Omnipraticien / Omnipraticienne'} >Omnipraticien / Omnipraticienne</MenuItem>
       <MenuItem value= {'Gynécologue-obstétricien / Gynécologue-obstétricienne'}>Gynécologue-obstétricien / Gynécologue-obstétricienne</MenuItem>
       <MenuItem   value= {'Oto-rhino-laryngologiste' }>Oto-rhino-laryngologiste</MenuItem>
       <MenuItem value= {'Médecin immunologue'}




>Médecin immunologue</MenuItem>
       <MenuItem value={ 'Hématologue'}  >Hématologue</MenuItem>
       <MenuItem value={ "Neurochirurgien / Neurochirurgienne  "} >Neurochirurgien / Neurochirurgienne </MenuItem>
       <MenuItem value= {'Médecin thermal  '} 
>Médecin thermal</MenuItem>
       <MenuItem value={ 'Allergologue  '}
>Allergologue</MenuItem>
       <MenuItem value= {'Médecin en pharmacovigilance' }>Médecin en pharmacovigilance</MenuItem>
       <MenuItem  value= {'Médecin généraliste'} >Médecin généraliste</MenuItem>
       <MenuItem value= {'Pédopsychiatre'} >Pédopsychiatre</MenuItem>
       <MenuItem value= {'Rhumatologue' } >Rhumatologue</MenuItem>
       <MenuItem  value= {'Médecin acupuncteur'} 
  
   
   
   >Médecin acupuncteur</MenuItem>
       <MenuItem  value= {'Médecin néphrologue'}  >Médecin néphrologue</MenuItem>
       <MenuItem  value= {'Pédiatre'} >Pédiatre</MenuItem>
       <MenuItem  value= {'Gastro-entérologue'} >Gastro-entérologue</MenuItem>
       <MenuItem    value= {'Dermatologue'}>Dermatologue</MenuItem>


 
     </Select>
   </FormControl>


     </Box></div>
   )
 }
 
 export default Searchdoc
  
     



   
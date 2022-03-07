import  React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useDispatch} from "react-redux";
import {onSelectLanguage} from "../redux/actions/AppActions"
import {useNavigate} from "react-router-dom";
 function Form() {
   const [language, setLanguage] = useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();
  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };
  const handleSubmit=(e:any)=>{
    e.preventDefault();    
    dispatch(onSelectLanguage(language))
    navigate("/question1")
  }
  return (
    <>
    <Paper style={{width: 200,padding:"20px 30px",margin:"20px auto" }} elevation={20}>
    <Typography component="h1">Fill the Details</Typography>
   <form data-testid="form" onSubmit={handleSubmit}>      
      <TextField data-testid="inputField" type="text" id="standard-basic" label="Enter name" variant="standard" required/>
       <TextField data-testid="email" type='email' id="standard-basic" label="Enter email" variant="standard" required />
      <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />       
      </RadioGroup>
    </FormControl>
     <FormControl fullWidth required>
        <InputLabel id="demo-simple-select-label">language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="language"
          onChange={handleChange}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Telugu">Telugu</MenuItem>          
        </Select>
      </FormControl>
      <Button data-testid="submit" type="submit" variant="contained"  style={{marginTop:10}}>submit</Button>
    </form>
    </Paper>
  
          

          
        
    </>
  );
}
export default Form;
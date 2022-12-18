import { Box, Avatar, Button, SvgIcon, Input, InputAdornment, FormControlLabel, Switch, Typography } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import {useState} from 'react'

const Form =()=>{
  
  //// PHONE NUMBER RELATED CODE
  const [phoneNo, setPhoneNo] = useState('')
  const phoneNumberFormat =(value)=>{
    if(!value) return value;
    const phoneNumber = value.replace(/[^0-9]/g, '');
    const phoneNumberLength = phoneNumber.length
    if(phoneNumberLength < 4) return phoneNumber;
    if(phoneNumberLength < 7) {
      return`(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`
    }
    return`(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(
      3,6,
      )}-${phoneNumber.slice(6,10)}`
  }
  const handleInputPhone = e =>{
    let validNo = phoneNumberFormat(e.target.value)
    setPhoneNo(validNo)
  }


  return (
    <Box>
    <Box >
      
      <Box sx={{ml: 6, mt: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2W9COm2KpsSYsXUwJOcqxUzxth1ssNNFzrg&usqp=CAU" alt="cat" sx={{ width: 150, height: 150, border: '2px white solid' }} />
        <Button>
          <SvgIcon> 
            <AddPhotoAlternate sx={{color: 'white'}}/> 
          </SvgIcon>
        </Button>
      </Box>

        </Box>
        <Typography sx={{mr: 3}}>Miaw Miaw</Typography>

        <Box>
        <Input placeholder="Full Name" sx={{m: 1, width: '70%', color: 'white' }} /> <br />
        <Input placeholder="Email" sx={{m: 1, width: '70%', color: 'white'}} /> <br />
        
        <Input placeholder="Phone Number" onChange={ handleInputPhone } value={ phoneNo } sx={{m: 1, width: '70%', color: 'white'}} /> <br />
        
        <Input placeholder="Password" type='password' sx={{m: 1, width: '70%', color: 'white'}} endAdornment={<InputAdornment position='end'><Button>Change Password</Button></InputAdornment> } /> <br />
        
        <Input placeholder="Access Pin" sx={{m: 1, width: '70%', color: 'white'}} endAdornment={ <InputAdornment position='end'>ACCESS PIN</InputAdornment> } /> <br />
        
        <FormControlLabel
          value="end"
          control={<Switch color="primary" />}
          label="ENABLE PAIRING"
          labelPlacement="end" 
          sx={{m: 1, width: '70%'}}
          
        />

        </Box>

    </Box>
  )
}

export default Form;
import { Box, Avatar, Button, SvgIcon, Input, InputAdornment, FormControlLabel, Switch,} from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import {useState} from 'react'

const Form =()=>{

  const [formInputs, setFormInputs] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    accessPin: '',
    pairing: false,
  })

  ///// STATE SETTER FUNCTIONS

  const phoneNumberFormat =(value)=>{
    if(!value) return value;
    const phoneNo = value.replace(/[^0-9]/g, '');
    const phoneNumberLength = phoneNo.length
    if(phoneNumberLength < 4) return phoneNo;
    if(phoneNumberLength < 7) {
      return`(${phoneNo.slice(0,3)}) ${phoneNo.slice(3)}`
    }
    return`(${phoneNo.slice(0,3)}) ${phoneNo.slice(
      3,6,
      )}-${phoneNo.slice(6,10)}`
  }

  const handleInputPhone = e =>{
    let validNo = phoneNumberFormat(e.target.value)
    setFormInputs({...formInputs, phoneNumber: validNo})
    console.log(formInputs.phoneNumber.length)
  }

  const nameChangeHandler = e =>{
    setFormInputs({...formInputs, fullName: e.target.value})
  }

  const emailChangeHandler = e =>{
    setFormInputs({...formInputs, email: e.target.value})
  }

  const passwordChangeHandler = e =>{
    setFormInputs({...formInputs, password: e.target.value})
  }
  const pinChangeHandler = e =>{
    setFormInputs({...formInputs, accessPin: e.target.value})
  }

  const pairingChangeHandler =(e)=>{
    setFormInputs({...formInputs, pairing: !formInputs.pairing})
  }
  console.log(formInputs)

  let emailIsValid = formInputs.email.includes('@')
  let phoneIsValid = formInputs.phoneNumber.length === 14;

  let formIsVAlid = false;

  if(emailIsValid && phoneIsValid && formInputs.accessPin && formInputs.fullName && formInputs.password){
    formIsVAlid = true
  }
  console.log(formIsVAlid)


  return (
    <Box>
    <Box>
      
      <Box sx={{ml: 6, mt: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnJojmgN3Kp5hJzjFARWAuiecsmHNzefg4rQ&usqp=CAU" alt="cat" sx={{ width: 150, height: 150, border: '2px white solid' }} />
        <Button>
          <SvgIcon> 
            <AddPhotoAlternate sx={{color: 'white'}}/> 
          </SvgIcon>
        </Button>
      </Box>

        </Box>
        <p id='mainName'>Janet Perkins</p>

        <Box>
        <Input placeholder="Full Name" onChange={ nameChangeHandler} sx={{m: 1, width: '70%', color: 'white' }} /> <br />
        
        <Input onChange={ emailChangeHandler } placeholder="Email" sx={{m: 1, width: '70%', color: 'white'}} /> <br />
        
        <Input placeholder="Phone Number" onChange={ handleInputPhone } value={ formInputs.phoneNumber } sx={{m: 1, width: '70%', color: 'white'}} /> <br />
        
        <Input placeholder="Password" onChange={ passwordChangeHandler} type='password' sx={{m: 1, width: '70%', color: 'white'}} endAdornment={<InputAdornment position='end'><Button sx={{color: 'rgb(18,150,180)'}}>Change Password</Button></InputAdornment> } /> <br />
        
        <Input type='number'  placeholder="Access Pin" onChange={pinChangeHandler} sx={{m: 1, width: '70%', color: 'white',}} endAdornment={ <InputAdornment position='end'><p style={{color: 'lightgrey'}} >ACCESS PIN</p></InputAdornment> } /> <br />
        
        <FormControlLabel
          control={<Switch onChange={ pairingChangeHandler} sx={{color: 'rgb(18,150,180)',}} />}
          label="ENABLE PAIRING"
          labelPlacement="end" 
          sx={{ color: 'rgb(18,150,180)', width: '70%', }}
        />

        </Box>
    </Box>

  )
}

export default Form;
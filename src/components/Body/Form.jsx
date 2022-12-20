import { Box, Avatar, Button, SvgIcon, Input, InputAdornment, FormControlLabel, Switch,} from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import {useState} from 'react'

const Form =( )=>{
  const [formInputs, setFormInputs] = useState({
    id: `mub012`,
    name: '',
    user_phone: '',
    user_email: '',
    // password: '',
    // accessPin: '',
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
    setFormInputs({...formInputs, user_phone: validNo})
  }

  const nameChangeHandler = e =>{
    setFormInputs({...formInputs, name: e.target.value})
  }

  const emailChangeHandler = e =>{
    setFormInputs({...formInputs, user_email: e.target.value})
  }

  const passwordChangeHandler = e =>{
    setFormInputs({...formInputs, password: e.target.value})
  }
  const pinChangeHandler = e =>{
    setFormInputs({...formInputs, accessPin: e.target.value})
  }

  const pairingChangeHandler =(e)=>{
    e.preventDefault()
    setFormInputs({...formInputs, pairing: !formInputs.pairing})
  }
  // console.log(formInputs)

  let emailIsValid = formInputs.user_email.includes('@')
  let phoneIsValid = formInputs.user_phone.length === 14;

  let formIsVAlid = false;

  if(emailIsValid && phoneIsValid && formInputs.accessPin && formInputs.name && formInputs.password){
    formIsVAlid = true
  }


  ////////// Sending data to API

  const sendData = async (formInputs)=>{
    try {
      const response = await fetch('http://projects.codeandtrust.com/api/user/create',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formInputs)
      })
      const data = await response.json()
      console.log(data)
      
    } catch (error) {
      console.log(error)
    }

  }

  const onFormSubmission =(e)=>{
    e.preventDefault()
    sendData(formInputs)

  }
  

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
  
      <form onSubmit={ onFormSubmission } >
        <Input placeholder="Full Name" onChange={ nameChangeHandler} sx={{m: 1, width: '70%', color: 'white' }} value={formInputs.name} /> <br />
        
        <Input onChange={ emailChangeHandler } placeholder="Email" value={ formInputs.user_email} sx={{m: 1, width: '70%', color: 'white'}} /> <br />
        
        <Input placeholder="Phone Number" onChange={ handleInputPhone } value={ formInputs.user_phone } sx={{m: 1, width: '70%', color: 'white'}} /> <br />
        
        <Input placeholder="Password" onChange={ passwordChangeHandler} type='password' sx={{m: 1, width: '70%', color: 'white'}} endAdornment={<InputAdornment position='end'><Button sx={{color: 'rgb(18,150,180)'}}>Change Password</Button></InputAdornment> } /> <br />
        
        <Input type='number'  placeholder="Access Pin" onChange={pinChangeHandler} sx={{m: 1, width: '70%', color: 'white',}} endAdornment={ <InputAdornment position='end'><p style={{color: 'lightgrey'}} >ACCESS PIN</p></InputAdornment> } /> <br />
        
        <FormControlLabel
          control={<Switch onChange={ pairingChangeHandler} sx={{color: 'rgb(18,150,180)',}} />}
          label="ENABLE PAIRING"
          labelPlacement="end" 
          sx={{ color: 'rgb(18,150,180)', width: '70%', }}
        />
        { formIsVAlid && <div style={{backgroundColor: 'white', display: 'flex', justifyContent: 'end'}}>
        <Button sx={{color: 'rgb(27,209,255)', mt: 2}}>Cancel</Button>
        <Button variant='contained' sx={{backgroundColor: 'rgb(27,209,255)', mt: 2, mx: 2}} type='submit'>Save</Button>
      </div> }
      </form>
  
        </Box>
    </Box>

  )
}

export default Form;
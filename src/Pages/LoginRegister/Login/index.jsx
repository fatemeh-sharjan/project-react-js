import React from "react";
import { useContext} from "react";
import AuthContext from "../../../utils/AuthContext";
import useFormFields from "../../../utils/useFormFields";
import { Box, TextField,Button, Typography } from '@mui/material'

export default function Login({ handlePageType }) {
  const [fields, handleChange] = useFormFields();
  const { handleLogin} = useContext(AuthContext);

  const handleClicks = () => {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(fields),
    })
      .then((res) => res.json())
      .then((data) => handleLogin(data.token))
      .catch((err) => alert(err));
  };
  return (
<>
<Box
sx={{
  width:"400px",
  height:'480px',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
}}
>
  
<Box 
sx={{
  width:'300px',
  height:'100px',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  // bgcolor:'red'
}}
>
<Box 
sx={{
  width:'160px',
  height:'80px',
}}
component={'img'} src="https://cdn.mylo.id/brands/1a8d9102-abaf-4384-83d6-31c4c1cda435/elm-app-client-logo-w9q2hghh.svg"></Box>
</Box>
<Box sx={{width:'300px',height:'30px',display:'flex',justifyContent:'center',alignItems:'center'}} component={"h4"}>please login</Box>
      <Box sx={{width:'300px',height:'80px',display:'flex',justifyContent:'center',alignItems:'center'}} >
        <TextField
          sx={{width:'300px'}}
          type="text"
          onChange={handleChange}
          placeholder="Email"
          required
          name="username"
        />
      </Box>
      <Box sx={{width:'300px',height:'80px',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <TextField
           sx={{width:'300px'}}
          type="text"
          onChange={handleChange}
          placeholder="password"
          required
          name="password"
        />
      </Box>
      <Typography component={"p"} sx={{textAlign:'center'}} onClick={handlePageType}>
      Don't have an account?
      </Typography>
      <Button variant="contained"  sx={{width:'300px',height:'50px' ,marginTop:'20px'}} onClick={handleClicks} >Login</Button>
</Box>
        
</>
  );
}

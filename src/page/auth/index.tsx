import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
} from '@mui/material';



const Login: React.FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
 
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    console.log("Login", login);
    console.log("Password", password);
    }
   
  
  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Tizimga Kirish
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            label="Login"
            variant="outlined"
            fullWidth  
            onChange={(e)=> setLogin(e.target.value)}
            required
          />
          <TextField
            label="Parol"
            type="password"
            variant="outlined"
            fullWidth
            onChange={(e)=> setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Kirish
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;

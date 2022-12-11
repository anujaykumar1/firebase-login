import { Box, Container, CssBaseline,Typography,TextField,Button } from "@mui/material";

const ForgotPassword = () =>{
return <Container component="main" maxWidth="xs">
<CssBaseline />
<Box
  sx={{
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
>
  
  <Typography component="h1" variant="h5">
   Forgot password
  </Typography>
  <Box component="form" onSubmit={()=>{console.log('clicked')}} noValidate sx={{ mt: 1 }}>
    <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
    />
    
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      submit
    </Button>
    </Box>
    </Box>
    </Container>
}

export default ForgotPassword;
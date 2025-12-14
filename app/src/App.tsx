import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, Container, TextField } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center',
          minHeight: '100vh',
        }}>
        <Container maxWidth="md">
          <TextField variant='outlined' fullWidth sx={{ '& .MuiOutlinedInput-root': { borderRadius: 8 } }} />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App

import { useEffect, useState, useRef } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, Container, TextField, IconButton, InputAdornment } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from 'axios'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [placeholderText, setPlaceholderText] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    axios.get("http://localhost:8000/api")
      .then((response) => {
        setPlaceholderText(response.data.initialText)
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleSend = () => {
    const inputText = inputRef.current?.value ?? '';
    axios.post("http://localhost:8000/api", { prompt: inputText })
      .then((response) => {
        console.log(response.data.answer)
      })
  }

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
          <TextField
            placeholder={placeholderText}
            inputRef={inputRef}
            variant='outlined'
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': { borderRadius: 8 },
              '& .MuiOutlinedInput-input': { paddingLeft: 4 },
            }}
            slotProps={{
              input: {
                endAdornment:
                  <InputAdornment position='end'>
                    <IconButton onClick={handleSend}>
                      <ArrowForwardIcon />
                    </IconButton>
                  </InputAdornment>
              }
            }}
          />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App

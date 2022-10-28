import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    // "fontFamily": "\"MyCustomFont\"",
    "fontSize": 17,
    // "lineHeight": 1.5,
    // "letterSpacing": 0.32,
    // useNextVariants: true,
    // suppressDeprecationWarnings: true,
    h6: {
      "fontWeight": 600,
    },
    subtitle2 : {
      "fontWeight": 700,

    }
   
  },
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme ={theme}>

        <Container />

      </ThemeProvider>
    
    </div>
  );
}

export default App;

import 'typeface-ubuntu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import logo from './logo-256.png';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: [
            'Ubuntu',
            'sans-serif',
          ].join(','),
          fontSize: 24,
          margin: 0,
          padding: 0,
          boxSizing: 'border-box'
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>TEST 3t manifest</div>
    </ThemeProvider>
  );
}

export default App;

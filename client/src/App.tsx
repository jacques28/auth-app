import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { HashRouter, Route, Routes } from 'react-router-dom';
import  Home  from './pages/Home';
import NotFind from './pages/NotFind';


const App: React.FC = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFind />} />
      </Routes>
      <div>
        <Container maxWidth="sm">
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
              <Toolbar>

                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                  Auth App
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {['Home', 'About', 'Contact'].map((text) => (
                    <Button
                      key={text}
                      variant="text"
                      sx={{ textTransform: 'none', color: 'white' }}
                    >
                      {text}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </AppBar>
            <Box component="nav">

            </Box>
            <Box component="main" sx={{ p: 3 }}>
              <Toolbar />

            </Box>
          </Box>
        </Container>


        <h1>React App</h1>
        <Button variant="contained">Hello World</Button>
      </div>
    </>

  );
};
const WrappedApp: React.FC = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>

  );
}

export default WrappedApp;

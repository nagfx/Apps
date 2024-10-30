import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container, AppBar, Toolbar, Typography, Box } from '@mui/material';
import WelcomePage from './components/WelcomePage';
import TodoList from './components/TodoList';
import CreditsPage from './components/CreditsPage';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<WelcomePage />} />
            <Route path="/todo-list" element={<TodoList />} />
            <Route path="/credits" element={<CreditsPage />} />
          </Routes>
        </Router>
      </Container>
      <Box sx={{ bgcolor: '#f0f0f0', p: 2, mt: 20, textAlign: 'center' }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Naman. All rights reserved.
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default App;

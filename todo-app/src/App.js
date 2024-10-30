import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import WelcomePage from './components/WelcomePage';
import TodoList from './components/TodoList';
import CreditsPage from './components/CreditsPage';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Router>
          <Routes>
            <Route exact path="/" element={<WelcomePage />} />
            <Route path="/todo-list" element={<TodoList />} />
            <Route path="/credits" element={<CreditsPage />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
};

export default App;

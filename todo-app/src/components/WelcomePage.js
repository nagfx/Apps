import React from 'react';
import { Button, Container, Typography, Card, CardContent, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleStartTodoList = () => {
    navigate('/todo-list');
  };

  const handleOpenCredits = () => {
    navigate('/credits');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>

        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Todo App
        </Typography>
      </Box>

        <Card sx={{
          background: 'linear-gradient(to right, #ffc3a0, #ffafbd)',
          m: 2,
          p: 2,
          borderRadius: 2,
          '&:hover': {
            boxShadow: 3,
          },
        }}>
              
        <CardContent>
          <Typography variant="body1">
            This application is built using the following stack:
            <ul>
              <li>React</li>
              <li>Material UI</li>
              <li>Font Awesome</li>
              <li>React Router</li>
            </ul>
            The application allows you to add, edit, update, and delete todos. It uses session storage to persist the todo items.
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleStartTodoList}>
          Start Todo List
        </Button>
        <Button variant="contained" color="secondary" onClick={handleOpenCredits}>
          Open Credits
        </Button>
      </Box>
    </Container>
  );
};

export default WelcomePage;

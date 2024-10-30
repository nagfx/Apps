import React, { useState, useEffect } from 'react';
import { Button, Container, TextField, List, ListItem, ListItemText, IconButton, Card, CardContent, Typography, Box } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, Save as SaveIcon } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editTodo, setEditTodo] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(sessionStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditTodo(todos[index]);
  };

  const handleSaveTodo = () => {
    if (editTodo.trim() !== '') {
      const newTodos = [...todos];
      newTodos[editIndex] = editTodo;
      setTodos(newTodos);
      setEditIndex(null);
      setEditTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: '#64B5F6', p: 2, mb: 2, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          To Do List
        </Typography>
      </Box>
      <TextField
        label="New Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddTodo} endIcon={<FontAwesomeIcon icon={faPlus} />}>
        Add Todo
      </Button>
      <List>
        {todos.map((todo, index) => (
          <Card key={index} sx={{
            background: 'linear-gradient(to right, #FFC0CB, #FFC0CD)',
            m: 1,
            p: 2,
            boxShadow: 1,
            borderRadius: 2,
            '&:hover': {
              boxShadow: 3,
              background: 'linear-gradient(to right, #FF69B4, #FFC0CB)',
            }
          }}>
            <CardContent>
              {editIndex === index ? (
                <>
                  <TextField
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                  <IconButton edge="end" aria-label="save" onClick={handleSaveTodo}>
                    <SaveIcon />
                  </IconButton>
                </>
              ) : (
                <>
                  <ListItemText primary={todo} />
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton edge="end" aria-label="edit" onClick={() => handleEditTodo(index)} sx={{ color: 'blueviolet' }}>
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTodo(index)} sx={{ color: 'red' }}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </List>
      <Button variant="contained" color="secondary" onClick={() => window.history.back()} sx={{ mt: 2 }}>
        Back
      </Button>
    </Container>
  );
};

export default TodoList;

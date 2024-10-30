import React from 'react';
import { Button, Container, Typography } from '@mui/material';

const CreditsPage = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Credits
      </Typography>
      <Typography variant="body1">
        Created by Naman
      </Typography>
      <Button variant="contained" color="secondary" onClick={() => window.history.back()} sx={{ mt: 2 }}>
        Back
      </Button>
    </Container>
  );
};

export default CreditsPage;

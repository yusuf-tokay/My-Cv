import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Yusuf's Portfolio
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            About
          </Button>
          <Button color="inherit" component={RouterLink} to="/projects">
            Projects
          </Button>
          <Button color="inherit" component={RouterLink} to="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 
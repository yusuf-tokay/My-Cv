import React from 'react';
import { Box, Typography, Container, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
          I'm a passionate software developer with expertise in Python, C#, Flutter, and more.
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ maxWidth: '800px', mx: 'auto' }}>
          I am currently a 4th year Software Engineering student at Fırat University. 
          I love creating innovative solutions and learning new technologies.
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 4, mt: 4 }}>
          <Box>
            <Paper elevation={3} sx={{ p: 3 }}>
              <CodeIcon sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Skills
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Python, C#, Flutter, React, and more
              </Typography>
            </Paper>
          </Box>

          <Box>
            <Paper elevation={3} sx={{ p: 3 }}>
              <SchoolIcon sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Education
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fırat University - Software Engineering
              </Typography>
            </Paper>
          </Box>

          <Box>
            <Paper elevation={3} sx={{ p: 3 }}>
              <WorkIcon sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Experience
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Various projects in AI, Web, and Mobile Development
              </Typography>
            </Paper>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            component={Link}
            to="/projects"
            variant="contained"
            color="primary"
            size="large"
          >
            View My Projects
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Home; 
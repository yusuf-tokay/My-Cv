import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardActions, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Deep Learning - Emotion Analysis',
      description: 'A deep learning-based emotion analysis system using Python and TensorFlow.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
      githubLink: 'https://github.com/yusuf-tokay/emotion-analysis',
      demoLink: '#'
    },
    {
      title: 'Rent A Car & Hospital Management Systems',
      description: 'C# based management systems for car rental and hospital operations.',
      technologies: ['C#', 'SQL Server', 'Windows Forms'],
      githubLink: 'https://github.com/yusuf-tokay/management-systems',
      demoLink: '#'
    },
    {
      title: 'Cafe Reservation Platform',
      description: 'A web-based platform for cafe reservations and management.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yusuf-tokay/cafe-reservation',
      demoLink: '#'
    },
    {
      title: 'Brain Tumor Detection System',
      description: 'AI-powered system for detecting brain tumors from MRI images.',
      technologies: ['Python', 'TensorFlow', 'OpenCV'],
      githubLink: 'https://github.com/yusuf-tokay/brain-tumor-detection',
      demoLink: '#'
    },
    {
      title: 'Voice Assistant & Face Recognition',
      description: 'A voice-controlled assistant with face recognition capabilities.',
      technologies: ['Python', 'Speech Recognition', 'OpenCV'],
      githubLink: 'https://github.com/yusuf-tokay/voice-assistant',
      demoLink: '#'
    },
    {
      title: 'FlyAr - Augmented Reality Game',
      description: 'An augmented reality game developed with Unity.',
      technologies: ['Unity', 'C#', 'AR Foundation'],
      githubLink: 'https://github.com/yusuf-tokay/flyar',
      demoLink: '#'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          My Projects
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ maxWidth: '800px', mx: 'auto' }}>
          Here are some of the projects I've worked on. Each project represents a unique challenge
          and learning opportunity in my journey as a software developer.
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 4, mt: 4 }}>
          {projects.map((project, index) => (
            <Box key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Technologies:
                    </Typography>
                    <Typography variant="body2">
                      {project.technologies.join(', ')}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    startIcon={<GitHubIcon />}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                  <Button
                    size="small"
                    startIcon={<LaunchIcon />}
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
};

export default Projects; 
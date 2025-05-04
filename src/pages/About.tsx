import React from 'react';
import { Box, Typography, Container, Paper, Link, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PsychologyIcon from '@mui/icons-material/Psychology';
import InstagramIcon from '@mui/icons-material/Instagram';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';

const About: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          About Me
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, mt: 4 }}>
          <Box>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                <SchoolIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Education
              </Typography>
              <Typography variant="body1" paragraph>
                I am currently a 4th year Software Engineering student at Fırat University.
                Throughout my academic journey, I have gained extensive knowledge in:
              </Typography>
              <ul>
                <li>Software Development</li>
                <li>Database Management</li>
                <li>Web Development</li>
                <li>Object-Oriented Programming</li>
                <li>Software Testing</li>
              </ul>
            </Paper>
          </Box>

          <Box>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                <CodeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Skills & Technologies
              </Typography>
              <Typography variant="body1" paragraph>
                I have experience working with various technologies and tools:
              </Typography>
              <ul>
                <li>Programming Languages: Python, Java, C#, JavaScript, HTML, CSS, Flutter</li>
                <li>Machine Learning: Deep Learning, TensorFlow, Keras</li>
                <li>Web Development: React, Node.js, Express</li>
                <li>Mobile Development: Flutter, React Native</li>
                <li>Database: SQL, MongoDB</li>
                <li>Version Control: Git, GitHub</li>
                <li>Tools: VS Code, Android Studio, PyCharm</li>
              </ul>
            </Paper>
          </Box>

          <Box>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                <LanguageIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Language Skills
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body1">Turkish (Native)</Typography>
                <LinearProgress variant="determinate" value={100} sx={{ mb: 2 }} />
                
                <Typography variant="body1">English (Advanced)</Typography>
                <LinearProgress variant="determinate" value={80} sx={{ mb: 2 }} />
                
                
              </Box>
            </Paper>
          </Box>

          <Box>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                <SportsEsportsIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Hobbies & Interests
              </Typography>
              <Box sx={{ mt: 2 }}>
                <ul>
                  <li>Artificial Intelligence & Machine Learning Research</li>
                  <li>Mobile Game Development</li>
                  <li>Open Source Contribution</li>
                  <li>Reading Technical Books & Articles</li>
                  <li>Playing Chess</li>
                  <li>Photography</li>
                  <li>Traveling</li>
                </ul>
              </Box>
            </Paper>
          </Box>

          <Box sx={{ gridColumn: '1 / -1' }}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                <PsychologyIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Soft Skills
              </Typography>
              <Box sx={{ mt: 2 }}>
                <ul>
                  <li>Problem Solving</li>
                  <li>Team Collaboration</li>
                  <li>Time Management</li>
                  <li>Adaptability</li>
                  <li>Critical Thinking</li>
                  <li>Communication</li>
                </ul>
              </Box>
            </Paper>
          </Box>

          <Box sx={{ gridColumn: '1 / -1' }}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Connect With Me
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <Link href="https://github.com/yusuf-tokay" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon fontSize="large" />
                </Link>
                <Link href="https://www.instagram.com/21_tky_21/" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon fontSize="large" />
                </Link>
                <Link href="https://trello.com/u/yusuftokay/boards" target="_blank" rel="noopener noreferrer">
                  <ViewKanbanIcon fontSize="large" />
                </Link>
              </Box>
            </Paper>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default About; 
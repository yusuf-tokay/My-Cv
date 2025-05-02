import React from 'react';
import { Box, Typography, Container, TextField, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';

const Contact: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Contact Me
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, mt: 4 }}>
          <Box>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Get in Touch
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  required
                  type="email"
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  required
                  multiline
                  rows={4}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Box>

          <Box>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Contact Information
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon sx={{ mr: 2 }} />
                  <Typography>yusuftokay019@gmail.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ mr: 2 }} />
                  <Typography>+90 531 297 32 49</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ mr: 2 }} />
                  <Typography>Diyarbakır, Turkey</Typography>
                </Box>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Social Media
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="outlined"
                    href="https://github.com/yusuf-tokay"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon />}
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="outlined"
                    href="https://www.instagram.com/21_tky_21/"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<InstagramIcon />}
                  >
                    Instagram
                  </Button>
                  <Button
                    variant="outlined"
                    href="https://trello.com/u/yusuftokay"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<ViewKanbanIcon />}
                  >
                    Trello
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Contact; 
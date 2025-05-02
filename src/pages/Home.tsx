import React from 'react';
import { Box, Typography, Container, Paper, Avatar, Grid, List, ListItem, ListItemIcon, ListItemText, Chip, LinearProgress, Link, Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LanguageIcon from '@mui/icons-material/Language';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CodeIcon from '@mui/icons-material/Code';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #232526 0%, #414345 100%)', py: 6 }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Paper elevation={6} sx={{ p: { xs: 2, md: 4 }, borderRadius: 4, background: 'rgba(30, 41, 59, 0.95)', color: '#fff' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
              <Avatar src="/profile.jpg" alt="Yusuf Tokay" sx={{ width: 120, height: 120, mb: 2, border: '4px solid #90caf9' }} />
              <Typography variant="h4" fontWeight={700} align="center" sx={{ color: '#90caf9' }}>YUSUF TOKAY</Typography>
              <Typography variant="h6" color="secondary" align="center" gutterBottom>Yazılım Mühendisi Öğrencisi</Typography>
            </Box>

            <Grid container spacing={3}>
              {/* İletişim Bilgileri */}
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 2, mb: 2, background: '#232526', color: '#fff' }}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>İletişim</Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon><PhoneIcon sx={{ color: '#90caf9' }} /></ListItemIcon>
                      <ListItemText primary="5370123638" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><EmailIcon sx={{ color: '#90caf9' }} /></ListItemIcon>
                      <ListItemText primary="yusuftokay019@gmail.com" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><LocationOnIcon sx={{ color: '#90caf9' }} /></ListItemIcon>
                      <ListItemText primary="Huzurevleri Mah. 35. Sk No:1 Kat:4, Diyarbakır/Kayapınar" />
                    </ListItem>
                  </List>
                </Paper>
                <Paper elevation={2} sx={{ p: 2, background: '#232526', color: '#fff' }}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>Konuştuğu Diller</Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon><LanguageIcon sx={{ color: '#90caf9' }} /></ListItemIcon>
                      <ListItemText primary="Türkçe - Ana Dil" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><LanguageIcon sx={{ color: '#90caf9' }} /></ListItemIcon>
                      <ListItemText primary="İngilizce - Orta" />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>

              {/* Eğitim ve Teknik Bilgiler */}
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 2, mb: 2, background: '#232526', color: '#fff' }}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>Eğitim</Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon><SchoolIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText
                        primary="Lisans Yazılım Mühendisliği"
                        secondary="Fırat Üniversitesi 2020-2025"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><SchoolIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText
                        primary="Ön Lisans Tıbbi Sekreterlik"
                        secondary="Fırat Üniversitesi 2022-2024"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><SchoolIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText
                        primary="Güler Şevki Özbek Anadolu Lisesi"
                        secondary="2016-2020"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><EmojiEventsIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText
                        primary="2019 yılında tıbbîtaç tak yapmış olduğum enerji dönüşümü adlı projede tıbbîtaç belgesine sahip oldum."
                      />
                    </ListItem>
                  </List>
                </Paper>
                <Paper elevation={2} sx={{ p: 2, background: '#232526', color: '#fff' }}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>Skills & Technologies</Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon><CodeIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="Python, Java, C#, JavaScript, HTML, CSS, Flutter" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><CodeIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="Deep Learning, TensorFlow, Keras" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><CodeIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="React, Node.js, Express" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><CodeIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="Flutter, React Native" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><CodeIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="SQL, MongoDB" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><CodeIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="Git, GitHub" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><CodeIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="VS Code, Android Studio, PyCharm" />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>

              {/* Language Proficiency & Soft Skills */}
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 2, mb: 2, background: '#232526', color: '#fff' }}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>Language Proficiency</Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body1">Turkish (Native)</Typography>
                    <LinearProgress variant="determinate" value={100} sx={{ mb: 2, height: 10, borderRadius: 5 }} />
                    <Typography variant="body1">English (Advanced)</Typography>
                    <LinearProgress variant="determinate" value={80} sx={{ mb: 2, height: 10, borderRadius: 5 }} />
                    <Typography variant="body1">German (Intermediate)</Typography>
                    <LinearProgress variant="determinate" value={50} sx={{ mb: 2, height: 10, borderRadius: 5 }} />
                  </Box>
                </Paper>
                <Paper elevation={2} sx={{ p: 2, background: '#232526', color: '#fff' }}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>Soft Skills</Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon><PsychologyIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="Problem Solving" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><PsychologyIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="Team Collaboration" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><PsychologyIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="Time Management" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><PsychologyIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="Adaptability" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><PsychologyIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="Critical Thinking" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><PsychologyIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="Communication" />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>

              {/* Hobiler & İlgi Alanları */}
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 2, mb: 2, background: '#232526', color: '#fff' }}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>Hobiler & İlgi Alanları</Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon><SportsEsportsIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="AI & Machine Learning Research" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><SportsEsportsIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="Mobile Game Development" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><SportsEsportsIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="Open Source Contribution" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><SportsEsportsIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="Reading Technical Books & Articles" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><SportsEsportsIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="Playing Chess" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><SportsEsportsIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="Photography" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><SportsEsportsIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                      <ListItemText primary="Traveling" />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>

              {/* Projeler */}
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 2, mb: 2, background: '#232526', color: '#fff' }}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>Yaptığı Projeler</Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon><WorkIcon sx={{ color: '#90caf9' }} /></ListItemIcon>
                      <ListItemText primary="Python ile yüz tanıma sistemi" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><WorkIcon sx={{ color: '#90caf9' }} /></ListItemIcon>
                      <ListItemText primary="Python ile duygu analizi" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><WorkIcon sx={{ color: '#90caf9' }} /></ListItemIcon>
                      <ListItemText primary="Python ile beyin tümörü tespiti" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><WorkIcon sx={{ color: '#90caf9' }} /></ListItemIcon>
                      <ListItemText primary="C# ile hastane otomasyonu" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><WorkIcon sx={{ color: '#90caf9' }} /></ListItemIcon>
                      <ListItemText primary="C# ile Rent a car otomasyonu ve birçok otomasyon" />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>

              {/* Sosyal Medya */}
              <Grid item xs={12}>
                <Paper elevation={2} sx={{ p: 2, background: '#232526', color: '#fff', textAlign: 'center' }}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>Connect With Me</Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                    <Link href="https://github.com/yusuf-tokay" target="_blank" rel="noopener noreferrer">
                      <GitHubIcon fontSize="large" sx={{ color: '#90caf9' }} />
                    </Link>
                    <Link href="https://www.instagram.com/21_tky_21/" target="_blank" rel="noopener noreferrer">
                      <InstagramIcon fontSize="large" sx={{ color: '#f48fb1' }} />
                    </Link>
                    <Link href="https://trello.com/u/yusuftokay" target="_blank" rel="noopener noreferrer">
                      <ViewKanbanIcon fontSize="large" sx={{ color: '#f48fb1' }} />
                    </Link>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home; 
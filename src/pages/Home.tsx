import React from 'react';
import { Box, Typography, Container, Paper, Avatar, Grid, List, ListItem, ListItemIcon, ListItemText, Chip, LinearProgress, Link } from '@mui/material';
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
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import { motion } from 'framer-motion';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Home: React.FC = () => {
  // PDF oluşturma fonksiyonu
  const handleDownloadPDF = async () => {
    const input = document.getElementById('cv-content');
    if (!input) return;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4'
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Görselin PDF sayfasına oranı
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    // İlk sayfa
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    // Çoklu sayfa desteği
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save('YusufTokay_CV.pdf');
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.59) 0%, rgb(29, 132, 234) 500%)', py: 6 }}>
      <Container maxWidth="md">
        {/* PDF İndir Butonu */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <button onClick={handleDownloadPDF} style={{ padding: '8px 20px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 600, cursor: 'pointer', fontSize: 16 }}>
            PDF olarak indir
          </button>
        </Box>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* PDF'e alınacak ana içerik için id ekliyorum */}
          <div id="cv-content">
            <Paper elevation={6} sx={{ p: { xs: 2, md: 4 }, borderRadius: 4, background: 'rgba(34, 33, 32, 0.96)', color: '#fff' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                <Typography variant="h4" fontWeight={700} align="center" sx={{ color: '#90caf9' }}>YUSUF TOKAY</Typography>
                <Avatar src="/ben.jpg" alt="Yusuf Tokay" sx={{ width: 100, height: 100, border: '4px solid rgb(15, 244, 213)', boxShadow: '0 0 20px rgba(220, 227, 20, 0.5)', borderRadius: '10px', mt: 2 }} />
                <Typography variant="h6" color="secondary" align="center" gutterBottom>Yazılım Mühendisi Öğrencisi</Typography>
              </Box>

              <Grid container spacing={3}>
                {/* İletişim & Sosyal Medya */}
                <Grid item xs={12} md={6}>
                  <Paper elevation={2} sx={{ p: 2, mb: 2, background: '#232526', color: '#fff' }}>
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>İletişim & Sosyal Medya</Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon><PhoneIcon sx={{ color: '#90caf9' }} /></ListItemIcon>
                        <ListItemText primary="5312973249" />
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
                    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                      <Link href="https://github.com/yusuf-tokay" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon fontSize="large" sx={{ color: '#90caf9' }} />
                      </Link>
                      <Link href="https://www.instagram.com/21_tky_21/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon fontSize="large" sx={{ color: '#f48fb1' }} />
                      </Link>
                      <Link href="https://trello.com/u/yusuftokay/boards" target="_blank" rel="noopener noreferrer">
                        <ViewKanbanIcon fontSize="large" sx={{ color: '#f48fb1' }} />
                      </Link>
                    </Box>
                  </Paper>
                </Grid>

                {/* Eğitim */}
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
                          primary="2019 yılında tübitak ta yapmış olduğum enerji dönüşümü adlı projede tübitak belgesine sahip oldum."
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>

                {/* Diller */}
                <Grid item xs={12} md={6}>
                  <Paper elevation={2} sx={{ p: 2, mb: 2, background: '#232526', color: '#fff' }}>
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>Diller</Typography>
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
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body1">Turkish (Native)</Typography>
                      <LinearProgress variant="determinate" value={100} sx={{ mb: 2, height: 10, borderRadius: 5 }} />
                      <Typography variant="body1">English (Advanced)</Typography>
                      <LinearProgress variant="determinate" value={80} sx={{ mb: 2, height: 10, borderRadius: 5 }} />
                      <Typography variant="body1">German (Intermediate)</Typography>
                      <LinearProgress variant="determinate" value={50} sx={{ mb: 2, height: 10, borderRadius: 5 }} />
                    </Box>
                  </Paper>
                </Grid>

                {/* Yetenekler & Teknik Beceriler */}
                <Grid item xs={12} md={6}>
                  <Paper elevation={2} sx={{ p: 2, mb: 2, background: '#232526', color: '#fff' }}>
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>Yetenekler & Teknik Beceriler</Typography>
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
                      <ListItem>
                        <ListItemIcon><PsychologyIcon sx={{ color: '#f48fb1' }} /></ListItemIcon>
                        <ListItemText primary="Problem Solving, Team Collaboration, Time Management, Adaptability, Critical Thinking, Communication" />
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
                        <ListItemText primary="AI & Machine Learning Research, Mobile Game Development, Open Source Contribution, Reading Technical Books & Articles, Playing Chess, Photography, Traveling" />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>

                {/* İş Deneyimi */}
                <Grid item xs={12} md={6}>
                  <Paper elevation={2} sx={{ p: 2, mb: 2, background: '#232526', color: '#fff' }}>
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>İş Deneyimi</Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon><WorkIcon sx={{ color: '#90caf9' }} /></ListItemIcon>
                        <ListItemText primary="Kriptarium - Siber Güvenlik Üzerine İşyeri Eğitimi" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><WorkIcon sx={{ color: '#90caf9' }} /></ListItemIcon>
                        <ListItemText primary="Intellıum Bilişim Teknolojileri - Yapay Zeka Üzerine Staj (2 Ay)" />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>

                {/* Projeler */}
                <Grid item xs={12} md={6}>
                  <Paper elevation={2} sx={{ p: 2, mb: 2, background: '#232526', color: '#fff' }}>
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>Projeler</Typography>
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
                      <ListItem>
                        <ListItemIcon><WorkIcon sx={{ color: '#90caf9' }} /></ListItemIcon>
                        <ListItemText primary="javascript ile Cafe Cestorant web sitesi" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><WorkIcon sx={{ color: '#90caf9' }} /></ListItemIcon>
                        <ListItemText primary="Flutter ile Cafe Restorunt Yönetim mobil uygulaması" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><WorkIcon sx={{ color: '#90caf9' }} /></ListItemIcon>
                        <ListItemText primary="Unıty ile ve birçok dil yardımı ile Artırılmış gerçeklik adlı mobil oyun " />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home; 
import { AppBar, Avatar, Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { deepOrange } from '@mui/material/colors';

const NavigationBar = () => {
  // const pages = [
  //   { name: 'Collection', path: '/collection' },
  //   { name: 'Reading Lists', path: '/reading-lists' },
  //   { name: 'Forums', path: '/forums' },
  // ];

  return (
    <AppBar position="static">
      <Container
        maxWidth={'xl'}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{

            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            component={Link}
            to='/'
            variant='h5'
            sx={{
              textDecoration: 'none',
              color: '#4C4C4C',
              py: 2,
              fontWeight: 'bold',
            }}
          >
            My Book Collection 📚
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            {pages.map((page) => (
              <Typography
                key={page.name}
                component={Link}
                to={page.path}
                sx={{
                  color: '#4C4C4C',
                  textDecoration: 'none',
                  mx: 2,
                  transition: 'color 0.3s, transform 0.3s',
                  '&:hover': {
                    color: '#7B3F00',
                    transform: 'scale(1.1)',
                    fontWeight: 'bold',
                  },
                }}
              >
                {page.name}
              </Typography>
            ))}
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ mx: 2, backgroundColor: '#4C4C4C' }}
          /> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              ml: 'auto',
            }}
          >
            <Typography
              key={'Profile'}
              component={Link}
              to={'/profile'}
              sx={{
                color: '#4C4C4C',
                textDecoration: 'none',
                mx: 2,
              }}
            >
              Welcome, Anonymous!
            </Typography>
            <Avatar sx={{ bgcolor: deepOrange[500] }} >R</Avatar>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Calculator from '../images/logo1.png';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { userIsAuthenticated } from '../helpers/auth';

const pages = ['About', 'Blog', 'PodCast', 'Contact'];
const pagesMobile = ['About', 'Blog', 'PodCast', 'Contact'];



const ResponsiveAppBar = () => {
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha('#515151', 0.15),
    '&:hover': {
      backgroundColor: alpha('#515151', 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  let navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.removeItem('token')
    navigate('/', { replace: true });
  }
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="fixed" sx={{
        background: '#e7dacc',
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/mika-blog/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#868B8E',
              textDecoration: 'none',
            }}
          ><div className='nav-logo'><img alt='a' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} src={Calculator}  id='calculator-home'/></div>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              {pagesMobile.map((page) => (
                
                <MenuItem className='mobile-nav' key={page} onClick={handleCloseNavMenu}>
                  <Typography  ><Link id='nav-link-mobile' to={page}><span id='nav-link-mobile'>{page}</span></Link></Typography>
                </MenuItem>
                
              ))}
              {userIsAuthenticated() && <p>Admin</p>}
              {userIsAuthenticated() && <button  onClick={handleLogout}>Logout</button>}
            </Menu>
          </Box>
          <Box sx={{  flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
              >
                <Link id='nav-link' to={page}>{page}</Link>
              </Button>
            ))}
            {userIsAuthenticated() && <p id='admin-link'>Admin</p>}
            {userIsAuthenticated() && <button id='admin-link' onClick={handleLogout}>Logout</button>}
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="サーチ…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

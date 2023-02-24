import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';

import { AppDispatch } from '../../redux';
import { loginUser, logout } from '../../redux/reducer/userData/userData';
import { LanguageButton } from '../language-drop-button/LanguageButton';
import { ModalWindow } from '../modal/Modal';

const pages = ['home', 'news', 'profile'];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '235px', md: '400px' },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const userDataStorage = localStorage.getItem('userData');
  const [error, setError] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [flag, setFlag] = useState<boolean>(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogin = () => {
    if (name && password) {
      if (name === 'admin' && password === '12345') {
        dispatch(loginUser({ name, password }));
        setError(false);
        setFlag(true);
        return navigate('/profile');
      }
      setError(true);
    }
    setError(true);
  };
  const handleLogout = () => {
    dispatch(logout());
    setFlag(false);
    return navigate('/');
  };

  useEffect(() => {
    if (userDataStorage) {
      const { userData } = JSON.parse(userDataStorage);
      if (userData.username && userData.password) {
        setFlag(true);
      }
    }
  }, [userDataStorage]);

  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant='h6'
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              <Link to='/'>{t('logo_text')}</Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  color: 'black',
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {pages.map(page => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>
                      <Link
                        id='RouterNavLink'
                        to={
                          page === 'home'
                            ? '/'
                            : page === 'profile'
                            ? '/'
                            : page
                        }
                      >
                        {t(page)}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
                <LanguageButton Padding='6px 16px' />
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant='h5'
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none'
              }}
            >
              <Link to='/'>{t('logo_text')}</Link>
            </Typography>

            <Container
              sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
              maxWidth='md'
            >
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map(page => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    <Link
                      key={page}
                      id='RouterNavLink'
                      to={
                        page === 'home'
                          ? '/'
                          : !flag && page === 'profile'
                          ? '/'
                          : page
                      }
                    >
                      {t(page)}
                    </Link>
                  </Button>
                ))}
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <LanguageButton Color='#fff' />
              </Box>
            </Container>

            <Box sx={{ flexGrow: 0 }}>
              {flag ? (
                <>
                  <Tooltip title='Open settings'>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt='Remy Sharp'
                        src='/static/images/avatar/2.jpg'
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id='menu-appbar'
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign='center' onClick={handleLogout}>
                        {t('logout')}
                      </Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <ModalWindow>
                  <Box sx={style}>
                    <div className='block-login'>
                      <FormControl>
                        <FormLabel>{t('login_text')}</FormLabel>
                        <Input
                          placeholder={t('login_text') || ''}
                          onChange={event => setName(event.target.value)}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>{t('password_text')}</FormLabel>
                        <Input
                          type='password'
                          placeholder={t('password_text') || ''}
                          onChange={event => setPassword(event.target.value)}
                        />
                        {error ? (
                          <FormHelperText sx={{ color: 'red' }}>
                            {t('error_input')}
                          </FormHelperText>
                        ) : null}
                      </FormControl>
                    </div>

                    <Button
                      sx={{
                        marginTop: '20px'
                      }}
                      variant='outlined'
                      onClick={handleLogin}
                    >
                      {t('login_button')}
                    </Button>
                  </Box>
                </ModalWindow>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

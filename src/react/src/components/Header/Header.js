import React, { useContext } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';
import styles from './styles';
import { uiContext } from '../../context/UIcontext';

const Header = () => {
  const classes = styles();
  const [open, setOpen] = useContext(uiContext);

  return (
    <AppBar
      position="fixed"
      color="primary"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(true)}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          React experiments
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

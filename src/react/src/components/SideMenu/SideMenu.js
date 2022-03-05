import React, { useContext, useState } from 'react';
import clsx from 'clsx';
import styles from './styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import BusinessIcon from '@material-ui/icons/Business';
import PeopleIcon from '@material-ui/icons/People';
import Settings from '@material-ui/icons/Settings';
import { theme } from '../../common/theme';
import { NavLink } from 'react-router-dom';
import { uiContext } from '../../context/UIcontext';

const SideMenu = () => {
  const classes = styles();
  const [open, setOpen] = useContext(uiContext);

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={() => setOpen(false)}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button key="tic-tac-toe">
          <NavLink to="/tic-tac-toe" className="menuItem">
            <ListItemText primary="Tic-tac-toe" />
          </NavLink>
        </ListItem>
        {/*<Divider />*/}
        <ListItem button key="linked-list">
          <NavLink to="/linked-list" className="menuItem">
            <ListItemText primary="Linked-list" />
          </NavLink>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideMenu;

import React, { useContext, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { theme } from '../../common/theme';
import PageNotFound from '../PageNotFound';
import '../../styles/main.css';
import homeStyles from './styles';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import { uiContext } from '../../context/UIcontext';

const AdminPanel = () => {
  const classes = homeStyles();
  const [open, setOpen] = useState(false);

  return (
    <uiContext.Provider value={[open, setOpen]}>
      <ThemeProvider theme={theme}>
        <Router>
          <div className={classes.root}>
            <CssBaseline />
            <Header />
            <SideMenu />
            <main className={classes.content}>
              <Routes>
                <Route path="/404" element={<PageNotFound />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </uiContext.Provider>
  );
};

export default AdminPanel;

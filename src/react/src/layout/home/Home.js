import React, { useContext, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../../styles/main.css';
import { theme } from '../../common/theme';
import homeStyles from './styles';
import { uiContext } from '../../context/UIcontext';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import PageNotFound from '../PageNotFound';
import TicTacToe from '../../experiments/tic-tac-toe/TicTacToe';
import { ReverseLinkedList } from '../../experiments/reverse-linked-list/ReverseLinkedList';

const AdminPanel = () => {
  const classes = homeStyles();
  const [open, setOpen] = useState(false);

  return (
    <uiContext.Provider value={[open, setOpen]}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className={classes.root}>
            <CssBaseline />
            <Header />
            <SideMenu />
            <main className={classes.content}>
              <Routes>
                <Route path="/tic-tac-toe" element={<TicTacToe />} />
                <Route path="/linked-list" element={<ReverseLinkedList />} />
                <Route path="/404" element={<PageNotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </uiContext.Provider>
  );
};

export default AdminPanel;

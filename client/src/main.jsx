import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import App from './App'
import theme from './theme';
import './index.css'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Router>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
)

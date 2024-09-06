// pages/_app.js

import React, { useEffect } from 'react';
import '../styles/globals.css';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <AppContent Component={Component} {...pageProps} />
    </ThemeProvider>
  );
};

// Wrapper component to apply the theme
const AppContent = ({ Component, ...props }) => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <>
      <Head>
        <link rel="icon" href="/crm.png" />
        <title>CRM Dashboard</title>
      </Head>
      <Component {...props} />
    </>
  );
};

export default MyApp;

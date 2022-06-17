import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';
import './App.css';
import LoginPage from './pages/Login/loginPage';
import GlobalStyled from './GlobalStyled';

const theme = {
    color: '#FFFFFF'
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyled />
            <LoginPage />
        </ThemeProvider>
    );
}

export default App;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/Login/loginPage';
import GlobalStyled from './GlobalStyled';
import { useSelector } from 'react-redux';
import TaskPage from './pages';

const theme = {
    color: '#FFFFFF'
};

function App() {
    const { user: currentUser } = useSelector((state) => state.auth);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyled />
            {!currentUser ? (
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path="/" element={<TaskPage />} />
                </Routes>
            )}
        </ThemeProvider>
    );
}

export default App;

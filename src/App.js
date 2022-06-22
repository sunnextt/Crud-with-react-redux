import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/Login/loginPage';
import GlobalStyled from './GlobalStyled';
import TaskPage from './pages';
import RequireAuth from './utils/requireAuth';

const theme = {
    color: '#FFFFFF'
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyled />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Routes>
                <Route
                    path="/"
                    element={
                        <RequireAuth>
                            <TaskPage />
                        </RequireAuth>
                    }
                />
            </Routes>
        </ThemeProvider>
    );
}

export default App;

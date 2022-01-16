import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { UserEditPage, UserMainPage } from 'features/user-login';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<UserMainPage />} />
                <Route path="/edit" element={<UserEditPage />} />
            </Routes>
        </div>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContextAware } from './context';
import { Login, SignUp, Dashboard } from './pages';

const App = () => (
  <AuthContextAware>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
    </Router>
  </AuthContextAware>
);

export default App;

import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContextAware, AuthContext } from './context';
import { Login, SignUp, Dashboard, Loading, QuizEdit, QuizTake } from './pages';

const AnonymousRoute = ({ element }) => {
  const auth = useContext(AuthContext);
  const loading = auth.loading;
  const isLoggedIn = auth?.session?.uid;
  return loading ? <Loading /> : !isLoggedIn ? element : <Navigate to='/dashboard' replace />;
};

const AuthenticatedRoute = ({ element }) => {
  const auth = useContext(AuthContext);
  const loading = auth.loading;
  const isLoggedIn = auth?.session?.uid;
  return loading ? <Loading /> : isLoggedIn ? element : <Navigate to='/login' replace />;
};

const App = () => (
  <AuthContextAware>
    <Router>
      <Routes>
        <Route path='/login' element={<AnonymousRoute element={<Login />} />} />
        <Route path='/signup' element={<AnonymousRoute element={<SignUp />} />} />
        <Route path='/dashboard' element={<AuthenticatedRoute element={<Dashboard />} />} />
        <Route path='/edit' element={<AuthenticatedRoute element={<QuizEdit />} />} />
        <Route path='/edit/:id' element={<AuthenticatedRoute element={<QuizEdit />} />} />
        <Route path='/take/:key' element={<QuizTake />} />
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
    </Router>
  </AuthContextAware>
);

export default App;

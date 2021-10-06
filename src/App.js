import './App.css';
import { Content } from 'carbon-components-react';
import Header from './components/header/Header';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import LoginPage from './pages/loginPage';
import MainPage from './pages/MainPage';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/login/ProtectedRoute'

function App() {
  return (
    <Router>
      <AuthProvider>
        <>
          <Header />
          <Content>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <ProtectedRoute path="/main" element={<MainPage />} />
            </Routes>
          </Content>
        </>
      </AuthProvider>
    </Router>
  );
}

export default App;

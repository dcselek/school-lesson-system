import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import LoginPage from './pages/loginPage';
import MainPage from './pages/MainPage';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/login/ProtectedRoute'

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <ProtectedRoute path="/main" element={<MainPage />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;

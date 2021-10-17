import './App.css';
import { Content } from 'carbon-components-react';
import Header from './components/header/Header';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import LoginPage from './pages/loginPage';
import MainPage from './pages/MainPage';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/login/ProtectedRoute'
import LessonsListPage from './pages/LessonsListPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" children={<LoginPage />} />
            <ProtectedRoute exact path="/main" children={<MainPage />} />
            <Route exact path="/main/lessons" children={<LessonsListPage />} />
          </Switch>
        </Content>
      </Router>
    </AuthProvider>
  );
}

export default App;

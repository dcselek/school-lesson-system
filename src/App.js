import './App.css';
import { Content } from 'carbon-components-react';
import Header from './components/header/Header';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import LoginPage from './pages/loginPage';
import MainPage from './pages/MainPage';
import ProtectedRoute from './components/login/ProtectedRoute'
import LessonsListPage from './pages/LessonsListPage';
import StudentsListPage from './pages/StudentsListPage';
import useAuth from './context/AuthContext'
import { useEffect } from 'react';

function App() {
  const { userType, authed, logout } = useAuth();

  useEffect(() => {
    logout();
  },[])
  return (
      <Router>
        <Header authed={authed} userType={userType} Content={
          <Content>
            <Switch>
              <Route exact path="/" children={<LoginPage />} />
              <ProtectedRoute exact path="/main" children={<MainPage />} />
              <Route path="/main/lessons" children={<LessonsListPage />} />
              <Route path="/main/students" children={<StudentsListPage />} />
            </Switch>
          </Content>
        } />
      </Router>
  );
}

export default App;

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

function App() {
  const { userType, authed } = useAuth();
  return (
      <Router>
        <Header authed={authed} userType={userType} Content={
          <Content>
            <Switch>
              <Route exact path="/" children={<LoginPage />} />
              <ProtectedRoute exact path="/main" children={<MainPage />} />
              <Route exact path="/main/lessons" children={<LessonsListPage />} />
              <Route exact path="/main/students" children={<StudentsListPage />} />
            </Switch>
          </Content>
        } />
      </Router>
  );
}

export default App;

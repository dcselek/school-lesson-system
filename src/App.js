import './App.css';
import { Content } from 'carbon-components-react';
import Header from './components/header/Header';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import LoginPage from './pages/loginPage';
import MainPage from './pages/MainPage';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/login/ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" children={<LoginPage />} />
            <ProtectedRoute path="/main" children={<MainPage />} />
          </Switch>
        </Content>
      </Router>
    </AuthProvider>
  );
}

export default App;

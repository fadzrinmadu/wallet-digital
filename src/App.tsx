import './style.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Transfer from './pages/Transfer';
import ProtectedRoute from './components/ProtectedRoute';
import UnprotectedRoute from './components/UnprotectedRoute';

function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Switch>
          <UnprotectedRoute exact path="/">
            <Login />
          </UnprotectedRoute>
          <UnprotectedRoute path="/register">
            <Register />
          </UnprotectedRoute>

          <ProtectedRoute path="/home">
            <Home props='' />
          </ProtectedRoute>
          <ProtectedRoute path="/transfer">
            <Transfer />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;

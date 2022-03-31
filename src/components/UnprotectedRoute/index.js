import { Redirect, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function UnprotectedRoute({ children, ...rest }) {
  const [cookies] = useCookies(['token']);

  return <Route {...rest}>
    {cookies.token ? <Redirect to="/home" /> : children}
  </Route>
}

import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Signin from '../pages/Signin';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/login" component={Login} />
      <MyRoute exact path="/signin" component={Signin} />
      <MyRoute path="*" component={Page404} />
    </ Switch>
  )
}

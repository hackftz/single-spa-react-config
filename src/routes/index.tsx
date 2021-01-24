import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../components/dashboard';
import Login from '../pages/login';

function Routes(props: any) {
  const { isLogin } = props;
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">{isLogin ? <Dashboard /> : <Redirect to="/login" />}</Route>
      </Switch>
    </Router>
  );
}

function mapStateToProps(state: any) {
  return { isLogin: state.isLogin };
}

export default connect(mapStateToProps)(Routes);

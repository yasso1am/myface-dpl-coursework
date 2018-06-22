import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import PostView from './PostView';
import FetchPosts from './FetchPosts';
import FriendPosts from './FriendPosts'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <ProtectedRoute exact path='/' component={Home} />
            <ProtectedRoute exact path='/friends' component={FriendPosts} />
            <ProtectedRoute path='/posts' component={FetchPosts} />
            <ProtectedRoute exact path='/posts/:id' component={PostView} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />

            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;

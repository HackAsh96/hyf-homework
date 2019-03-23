import React from 'react';
import { Route } from 'react-router-dom';
import { Home, User } from '../Routers';

class CompsWrapper extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/users/:username" exact component={User} />
      </div>
    );
  }
}

export default CompsWrapper;

import React from 'react';

export default class User extends React.Component {
  render() {
    console.log(this.props);
    const { username } = this.props.match.params;
    const { avatar_url } = this.props.location.query;
    return (
      <React.Fragment>
        <h1>Welcome to {username}' page</h1>
        <img src={avatar_url} />
      </React.Fragment>
    );
  }
}

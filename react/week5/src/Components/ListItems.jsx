import React from 'react';
import { Link } from 'react-router-dom';

class ListItems extends React.Component {
  render() {
    const { result } = this.props;

    const userList =
      result.length > 0
        ? result.map((user, i) => {
            const location = {
              pathname: `/users/${user.login}`,
              query: user,
              state: { fromDashboard: true }
            };
            return (
              <li key={i}>
                {user.login}
                <img src={user.avatar_url} />
                <Link to={location} key={i}>
                  <button>Search</button>
                </Link>
              </li>
            );
          })
        : 'no result';

    return <ul>{userList}</ul>;
  }
}

export default ListItems;

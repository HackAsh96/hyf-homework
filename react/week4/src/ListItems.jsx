import React from 'react';

class ListItems extends React.Component {
  render() {
    const { result } = this.props;
    console.log(result);
    const userList =
      result.length > 0
        ? result.map((user, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  window.location.href = user.html_url;
                }}
              >
                {user.login}
                <img src={user.avatar_url} />
              </li>
            );
          })
        : 'no result';
    return <ul>{userList}</ul>;
  }
}

export default ListItems;

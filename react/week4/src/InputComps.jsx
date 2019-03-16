import React from 'react';
import debounce from 'lodash.debounce';
import { getGithubUsers } from '../API/gitHubUserSearch';
import ListItems from './ListItems.jsx';

class InputComps extends React.Component {
  constructor(props) {
    super(props);
    this.state = { resultUsers: [] };
    this.onSearchHandler = debounce(this.onSearchHandler.bind(this), 1000);
  }
  onSearchHandler({ target: { value: query } }) {
    if (query === '') return this.setState({ resultUsers: [] });

    getGithubUsers(query).then(data => {
      this.setState({ resultUsers: data.items });
    });
  }
  render() {
    return (
      <React.Fragment>
        <input
          className="search-input"
          onChange={e => {
            e.persist();
            this.onSearchHandler(e);
          }}
          type="text"
          placeholder="Search..."
        />
        <ListItems result={this.state.resultUsers} />
      </React.Fragment>
    );
  }
}

export default InputComps;

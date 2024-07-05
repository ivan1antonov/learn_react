import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }
  increment(data): any {
    this.setState(data);
  }
  componentDidMount(): void {
    fetch
      .get('https://swapi.dev/api/')
      .then(responce => {
        return responce.json();
      })
      .then(data => increment(data));
  }
  render() {
    return (
      <div>
        <input type="search" />
        <button>Search</button>
      </div>
    );
  }
}

export default Search;

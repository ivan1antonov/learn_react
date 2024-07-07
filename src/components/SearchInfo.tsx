import React from 'react';

interface SearchResult {
  name: string;
  description?: string;
  planets?: string[];
}

interface SearchInfoProps {
  resultSearch: SearchResult[];
}

class SearchInfo extends React.Component<SearchInfoProps> {
  static defaultProps = {
    resultSearch: [],
  };

  render() {
    return (
      <div>
        {this.props.resultSearch.map((el, index) => (
          <div key={index}>
            <h3>{el.name}</h3>
            <p>birth year: {el.birth_year}</p>
            <p>gender: {el.gender}</p>
            <p>skin color: {el.skin_color}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchInfo;

const SearchInfo = props => {
  <div>
    {props.search.map(el => {
      <div>
        <h3>{el.name}</h3>
        <p>{el.description}</p>
      </div>;
    })}
  </div>;
};

export default SearchInfo;

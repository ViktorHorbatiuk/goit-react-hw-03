const SearchBox = ({ filter, onFilterChange }) => (
  <div>
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={onFilterChange} />
    </label>
  </div>
);

export default SearchBox;

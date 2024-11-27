import css from "../SearchBox/SearchBox.module.css"

const SearchBox = ({ filter, onFilterChange }) => (
  <div className={css.label}>
    <label>
      <span>Find contacts by name</span>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  </div>
);

export default SearchBox;

import { useState, useEffect, forwardRef } from "react";
import PropTypes from "prop-types";
import useDebounce from "../../../helpers/useDebounce";
import styles from "./SearchInput.module.scss";
import { CiSearch } from "react-icons/ci";

const SearchInput = forwardRef(({ onSearch, onFocus }, ref) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.input__wrapper}>
      <input
        id="search"
        type="text"
        placeholder="Поиск игр..."
        value={searchTerm}
        onChange={handleChange}
        onFocus={onFocus}
        ref={ref}
        className={styles.input}
      />
      <label className={styles.input__label} htmlFor="search">
        <CiSearch className={styles.input__icon} />
      </label>
    </div>
  );
});

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
};

SearchInput.displayName = "SearchInput";

export default SearchInput;

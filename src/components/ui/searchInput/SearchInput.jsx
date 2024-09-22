import { useState, useEffect } from "react";
import useDebounce from "../../../helpers/useDebounce";

const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Поиск игр..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchInput;

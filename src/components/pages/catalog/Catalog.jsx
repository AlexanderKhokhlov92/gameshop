import { useState } from "react";
import GameList from "../../gamelist/GameList";
import SearchInput from "../../ui/searchInput/SearchInput";
const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <SearchInput onSearch={handleSearch} />
      <GameList searchTerm={searchTerm} />
    </div>
  );
};

export default Catalog;

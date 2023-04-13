import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./MoviesSearch.module.css"
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();
    navigate(`/search/${searchTerm}`);
  }

  return (
    <form onSubmit={handleSearch} className={styles.searchbar}>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search movies..."
        className={styles.searchbar__input}
      />
      <button type="submit" className={styles.searchbar__button}>Search</button>
    </form>
  );
}

export default SearchBar;
import { Link, useParams } from "react-router-dom"
import { useEffect, useState} from "react";
import Card from "../../Cards/card";
import axios from "axios"
import styles from "./SearchResearch.module.css"
function SearchResults() {
  const { searchTerm } = useParams();

  console.log(searchTerm)
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      async function fetchMovies() {
        setIsLoading(true);
        try {
          console.log(`https://www.omdbapi.com/?apikey=45f0782a&t=${searchTerm}`)
          const response = await axios.get(`https://www.omdbapi.com/?apikey=45f0782a&t=${searchTerm}`);
          console.log(response.Title)
          console.log(response.data.Title)
          
          setMovies([response.data]);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
      fetchMovies();
    }, [searchTerm]);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    return (
      <>
        {!movies ? (
          <p>not found</p>
        ) : (
          <div>
            <h2>Search Results for {searchTerm}</h2>
    
            {movies.map((product) => (

<div className={styles.card}>
<div   >
<img  className={styles.image}src={product.Poster} />

<div >
  <span className={styles.productName}>{product.Title}</span>
 
</div>
</div>
</div>
            ))}
          </div>
        )}
      </>
    );
  }

  export default SearchResults


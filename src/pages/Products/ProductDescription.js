import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState , useCallback} from "react";

import styles from "./ProductDescription.module.css"


function ProductDescription(props) {
    const params = useParams();
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    const fetchProduct = useCallback(async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=45f0782a&i=${params.productId}`);
        setSelectedProduct(response.data);
      } catch (err) {
        // setError();
      }
    }, [])
  
    useEffect(() => {
      fetchProduct();
    }, [fetchProduct]);
  
    if (selectedProduct === null) {
      return <h1 className={styles.load}>.......LOADING</h1>;
    }
  
    return (
      <>
 
    <div className={styles.moviedetailscontainer}>
      <div className="poster">
        <img src={selectedProduct.Poster} alt={selectedProduct.title} />
      </div>
      <div className="details">
        <h1>{selectedProduct.title}</h1>
        {/* <p className="description">{selectedProduct.description}</p> */}
        <div className="info">
          <p>
            <span className="label">Director:</span> {selectedProduct.Director}
          </p>
          <p>
            <span className="label">Cast:</span> {selectedProduct.Actors}
          </p>
          <p>
            <span className="label">Genre:</span> {selectedProduct.Genre}
          </p>
          <p>
            <span className="label">Release Date:</span> {selectedProduct.Released}
          </p>
          <p>
            <span className="label">Runtime:</span> {selectedProduct.Runtime}
          </p>
          {/* <p>
            <span className="label">Rating:</span> {selectedProduct.Ratings[0].Value}
          </p> */}
        </div>
      </div>
    </div>
 



      </>
    );
  }
  
  export default ProductDescription;
  
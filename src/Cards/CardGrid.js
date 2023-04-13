import styles from "./CardGrid.module.css";

import {useSelector} from 'react-redux';
import Card from "./card";

function CardGrid(props) {
  const products = useSelector(state => state.productStore.products)

  return (
    <div>
      <>
        <div className={styles.container}>
          {products.map((product) => {
            return (
            <Card
            key={product.imdbID}
            id={product.imdbID}
            title={product.Title}
            image={product.Poster}
          
            /> 
            );
          })}
        </div>
      </>
    </div>
  );
}

export default CardGrid;
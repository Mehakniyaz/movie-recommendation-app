import React from "react";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
function Card(props) {
const navigate=useNavigate()
  const navigateToPdP=(productId)=>{
    console.log(productId)
navigate(`/productdescription/${productId}`)
  }
    return (
      <div className={styles.card} onClick={()=>{navigateToPdP(props.id)}} >
        <img  className={styles.image}src={props.image} />
  
        <div >
          <span className={styles.productName}>{props.title}</span>
         
        </div>
      </div>
    );
  }
  
  export default Card;

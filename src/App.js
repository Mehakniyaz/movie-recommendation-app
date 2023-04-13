import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "./store/product-slice";
import Product from "./pages/Products/products";
import { Routes, Route, Navigate ,BrowserRouter} from "react-router-dom";
import ProductDescription from "./pages/Products/ProductDescription";
import MovieSearch from "./pages/Movie/MoviesSearch";
import SearchResults from "./pages/Movie/SearchResult"
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProducts() {
      const result = await axios.get(
        "https://www.omdbapi.com/?apikey=45f0782a&s=war"
      );
      console.log(result);
      dispatch(productActions.addProducts(result.data.Search));
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product></Product>}> </Route>
        <Route path="/productdescription/:productId" element={<ProductDescription></ProductDescription>}> </Route>
        <Route path="/search/:searchTerm" element={<SearchResults></SearchResults>} ></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

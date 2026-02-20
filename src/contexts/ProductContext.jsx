import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setNewProduct] = useState([]);
  const fetchProducts = () => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      setNewProduct(response.data);
    });
  };

  const contextValue = { fetchProducts, products };
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  return useContext(ProductContext);
}

export { ProductProvider, useProduct };

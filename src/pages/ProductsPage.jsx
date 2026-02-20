import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { useProduct, ProductProvider } from '../contexts/ProductContext';

export default function ProductsPage() {
  const { fetchProducts, products } = useProduct();
  useEffect(fetchProducts, []);
  //const [products, setNewProduct] = useState([]);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);
  // const [pagination, setPagination] = useState({
  // next: null,
  //prev: null,
  //});

  //const fetchProducts = () => {
  //axios
  //.get('https://fakestoreapi.com/products')
  // .then((response) => {
  // setNewProduct(response.data);
  // setLoading(false);
  // })
  // .catch((err) => {
  // setError('Errore nel caricamento dei prodotti');
  // setLoading(false);
  // });
  // };

  // if (loading) return <p>Caricamento...</p>;
  //  if (error) return <p>{error}</p>;

  return (
    <>
      <h1 className="text-center text-light bg-primary mt-5 p-5">Products</h1>
      <div className="container">
        <div className="row centercontainer">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

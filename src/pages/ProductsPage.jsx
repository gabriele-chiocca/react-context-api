import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { useBudget } from '../contexts/BudgetContext';

export default function ProductsPage() {
  const { budgetMode } = useBudget();

  const [products, setNewProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    next: null,
    prev: null,
  });

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setNewProduct(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Errore nel caricamento dei prodotti');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>{error}</p>;

  const visibleProducts = budgetMode
    ? products.filter((p) => p.price <= 30)
    : products;

  return (
    <>
      <h1 className="text-center text-light bg-primary mt-5 p-5">Products</h1>
      <div className="container">
        <div className="row centercontainer">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

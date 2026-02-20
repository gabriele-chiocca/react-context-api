import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios, { all } from 'axios';

export default function SingleProduct() {
  const { id } = useParams();
  const [product, SetProduct] = useState();
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.data || !res.data.id) {
          navigate('/404');
          return;
        }
        console.log(res.data);
        SetProduct(res.data);
      })
      .catch((err) => {
        setError('Errore nel caricamento del prodotto' + err);
        setLoader(false);
        navigate('/404');
      });

    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setAllProducts(res.data);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [id]);

  if (loader)
    return (
      <p
        className="bg-warning-subtle p-5
"
      >
        Caricamento...
      </p>
    );

  if (error)
    return (
      <p
        className="bg-danger p-5
"
      >
        {error}
      </p>
    );

  if (!product) return null;

  const currentIndex = allProducts.findIndex((p) => p.id === Number(id));

  const prevProduct = currentIndex > 0 ? allProducts[currentIndex - 1] : null;

  const nextProduct =
    currentIndex < allProducts.length - 1
      ? allProducts[currentIndex + 1]
      : null;

  console.log(currentIndex);

  return (
    <>
      <div className="card cardwith">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
        ></img>
        <div className="card-body cardwithbody">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.price}</p>
          <a href="#" className="btn btn-primary">
            Scopri di più
          </a>
        </div>
      </div>

      <div className="d-flex d-inline mt-5">
        <div>
          <button
            className="btn btn-secondary"
            disabled={!prevProduct}
            onClick={() => navigate(`/Products/${prevProduct.id}`)}
          >
            Prodotto precedente
          </button>
        </div>
        <div className="ms-3">
          <button
            className="btn btn-primary"
            disabled={!nextProduct}
            onClick={() => navigate(`/Products/${nextProduct.id}`)}
          >
            Prossimo prodotto
          </button>
        </div>
      </div>
    </>
  );
}

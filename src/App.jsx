import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ProductsPage from './pages/ProductsPage';
import DefaultLayout from './layouts/DefaultLayout';
import SingleProduct from './pages/SingleProduct';
import NotFound from './pages/NotFound';
import { ProductProvider } from './contexts/ProductContext';

function App() {
  return (
    <>
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="/About-us" Component={AboutUsPage} />
              <Route path="/Products" Component={ProductsPage} />
              <Route path="/Products/:id" Component={SingleProduct} />
              <Route path="/404" Component={NotFound} />
              <Route path="*" Component={NotFound} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </>
  );
}

export default App;

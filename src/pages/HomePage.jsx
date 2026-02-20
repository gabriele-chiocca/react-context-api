import { NavLink } from 'react-router-dom';
import Header from '../components/header';

export default function HomePage() {
  return (
    <>
      <h1 className="text-center mt-5">Homepage</h1>;
      <div className=" text-center  text-light p-5 bg-primary">
        <h2>Benvenuti offriamo i migliori prodotti di qualità</h2>
      </div>
    </>
  );
}

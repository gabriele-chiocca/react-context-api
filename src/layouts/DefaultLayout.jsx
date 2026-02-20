import Header from '../components/header';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="mt-3 container">
          <Outlet></Outlet>
        </div>
      </main>
    </>
  );
}

import { Link, Outlet } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';

const MainLayout = () => {
  return (
    <>
      <Link to=".">
        <Header />
      </Link>
      <Menu />
      <Outlet />
    </>
  );
};

export default MainLayout;

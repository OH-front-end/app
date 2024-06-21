import { Link, Outlet } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import imgBanner from '../../assets/2048x60.avif';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <>
      <Link to="." className={styles.imgBanner}>
        <img src={imgBanner} alt="" />
      </Link>

      <Header />

      <Menu />
      <Outlet />
    </>
  );
};

export default MainLayout;

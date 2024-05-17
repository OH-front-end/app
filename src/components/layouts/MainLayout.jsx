import { NavLink, Link, Outlet } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import imgBanner from '../../assets/2048x60.avif';
import logoApple from '../../assets/apple_logo.png';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <>
      <Link to=".">
        <Header>
          <img src={imgBanner} alt="" />
        </Header>
      </Link>
      <Header>
        <div className={styles.header_menu}>
          <img className={styles.header_apple_logo} src={logoApple} alt="" />
          <nav className={styles.header_nav}>
            <Link to="actions">Акції</Link>
            <Link to="forclients">Клієнтам</Link>
            <Link to="servises">Послуги</Link>
            <Link to="news">Новини</Link>
            <Link to="support">Служба підтримки</Link>
            <NavLink to="about">Про нас</NavLink>
          </nav>
        </div>
      </Header>
      <Menu>
        <nav className={styles.menu_nav}>
          <div className={styles.catalog_link}>
            <NavLink to="catalog">Каталог</NavLink>
          </div>
          <div className={styles.other_link}></div>
        </nav>
      </Menu>
      <Outlet />
    </>
  );
};

export default MainLayout;

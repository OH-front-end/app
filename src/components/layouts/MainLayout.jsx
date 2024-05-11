import { NavLink, Link, Outlet } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import imgBanner from '../../assets/2048x60.avif';
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
        <nav className={styles.navheader}>
          <Link to="actions">Акції</Link>
          <Link to="forclients">Клієнтам</Link>
          <Link to="servises">Послуги</Link>
          <Link to="news">Новини</Link>
          <Link to="support">Служба підтримки</Link>
        </nav>
      </Header>
      <Menu>
        <nav className={styles.navmenu}>
          <NavLink to="." end>
            Головна
          </NavLink>
          <NavLink to="catalog">Каталог</NavLink>
          <NavLink to="contacts">Контакти</NavLink>
          <NavLink to="about">Про нас</NavLink>
        </nav>
      </Menu>
      <Outlet />
    </>
  );
};

export default MainLayout;
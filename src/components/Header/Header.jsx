import { Link } from 'react-router-dom';
import logoApple from '../../assets/apple_logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <div className={styles.header_menu}>
        <img className={styles.header_apple_logo} src={logoApple} alt="" />
        <nav className={styles.header_nav}>
          <Link to="actions">Акції</Link>
          <Link to="forclients">Клієнтам</Link>
          <Link to="servises">Послуги</Link>
          <Link to="news">Новини</Link>
          <Link to="support">Служба підтримки</Link>
          <Link to="about">Про нас</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;

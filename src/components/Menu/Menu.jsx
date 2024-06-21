import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import basket from '../../assets/svg/basket.svg';
import compare from '../../assets/svg/compare.svg';
import desired from '../../assets/svg/desired.svg';
import authorize from '../../assets/svg/authorize.svg';

const Menu = () => {
  return (
    <>
      <nav className={styles.menu}>
        <div className={styles.menuCatalogLink}>
          <Link to="catalog">Каталог</Link>
        </div>
        <input className={styles.menuInput} type="text" placeholder="Пошук" />
        <div className={styles.menuTools}>
          <div className={styles.menuToolsAuthorize}>
            <img src={authorize} alt="" className={styles.menuToolsAuthorizeIcon} />
            <span className={styles.menuToolsAuthorizeCaption}>Вхід</span>
          </div>
          <div className={styles.menuActions}>
            <img src={basket} alt="" className={styles.menuActionsBasket} />
            <img src={compare} alt="" className={styles.menuActionsCompare} />
            <img src={desired} alt="" className={styles.menuActionsDesired} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;

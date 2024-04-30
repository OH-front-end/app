import styles from './Header.module.css';
import imgLogo from '../../assets/2048x60.avif';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <img src={imgLogo} alt="" />
      </div>
    </>
  );
};

export default Header;

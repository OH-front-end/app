import styles from './Support.module.css';
import supportImg from '../../assets/support.png';

const Support = () => {
  return (
    <div className={styles.support_container}>
      <div className={styles.support_header}>
        <img className={styles.support_img} src={supportImg} alt="" />
        <div className={styles.support_title}>
          <span style={{ fontSize: '70px', letterSpacing: '4px' }}>Служба</span> підтримки
          <span className={styles.support_caption}>клієнтів</span>
        </div>
      </div>
    </div>
  );
};

export default Support;

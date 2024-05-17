import styles from './Support.module.css';
import supportImg from '../../assets/support.png';

const Support = () => {
  return (
    <>
      <div className={styles.support_container}>
        <div className={styles.support_header}>
          <img className={styles.support_header_img} src={supportImg} alt="" />
          <div className={styles.support_header_title}>
            <span style={{ fontSize: '70px', letterSpacing: '4px' }}>Служба</span> підтримки
            <span className={styles.support_header_caption}>клієнтів</span>
          </div>
        </div>

        <div className={styles.support_description}>
          <h1 className={styles.support_description_title}>Любий клієнте!!!</h1>
          <p className={styles.support_description_subtitle}>
            Раді вітати на сторінці Служби підтримки клієнтів компанії «AppleStore»!
          </p>
          <p className={styles.support_description_item}>
            Тут ви зможете вирішити будь-яке питання, отримати якісну консультацію, поділитись
            враженнями від покупки та/або запропонувати цікаві пропозиції до розгляду.
          </p>
          <p className={styles.support_description_item}>
            Для нас є дуже важливою думка кожного, адже це безпосередньо впливає на процес
            покращення сервісного обслуговування у мережі.
          </p>
          <p className={styles.support_description_item}>
            Ви задоволені обслуговуванням у фізичному або інтернет-магазині «Цитрус»? Будемо раді,
            якщо ви знайдете час поділитись своїми емоціями від покупки!
          </p>
          <p className={styles.support_description_item}>
            Маєте зауваження або хочете залишити скаргу? Готові до діалогу, розгляду ситуації та
            надання варіантів її вирішення!
          </p>
          <p className={styles.support_description_item}>
            Маєте пропозицію до співпраці? Залюбки розглянемо її!
          </p>
          <p className={styles.support_description_item}>
            Нашою головною метою є підтримання сервісного обслуговування на найвищому рівні. Тому
            отриманий від вас зворотній зв'язок дуже важливий для нас.
          </p>
        </div>
      </div>
    </>
  );
};

export default Support;

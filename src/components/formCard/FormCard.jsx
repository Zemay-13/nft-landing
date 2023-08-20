import { HiOutlineX } from "react-icons/hi";
import decorBg from "../../assets/image/decor-bg-green.svg";

import styles from "./FormCard.module.scss";

const FormCard = ({ setOpenForm, openForm }) => {
  return (
    <div className={styles.fc}>
      <HiOutlineX
        className={styles.fc__close}
        onClick={() => setOpenForm(!openForm)}
      />
      <div className={styles.fc__content}>
        <h1 className={styles.content__title}>Начни прямо сейчас!</h1>
        <p className={styles.content__text}>
          Получи все нужные навыки для заработка на NFT всего за 28 дней!
        </p>
        <form action={styles.content__form}>
          <input
            type="text"
            className={styles.form__input}
            placeholder="Ваш email"
          />
          <button className={styles.form__submit}>Оплатить</button>
        </form>
      </div>
      <img src={decorBg} alt="" className={styles.fc__decorBg} />
    </div>
  );
};

export default FormCard;

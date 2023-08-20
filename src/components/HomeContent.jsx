import manCircleImg from "../assets/image/manCircle.svg";
import manImgMobile from "../assets/image/manMobile.svg";
import FormCard from "./formCard/FormCard";

import styles from "./HomeContent.module.scss";
const HomeContent = ({ openForm, setOpenForm }) => {
  return (
    <>
      <div className={styles.hс}>
        <div className={styles.hc__containerContent}>
          <h1 className={styles.containerContent__title}>
            Не упусти возможность войти в <span>прибыльную нишу</span> 
          </h1>
          <img
            src={manImgMobile}
            alt="man"
            className={styles.containerContent__imgMobile}
          />
          <h2 className={styles.containerContent__subtitle}>
            Получи все нужные навыки для заработка на NFT всего за 28 дней!
          </h2>

          <button className={styles.containerContent__button}>
            Начать зарабатывать на NFT
          </button>
        </div>
        <img src={manCircleImg} alt="man" className={styles.hc__img} />
      </div>
      {openForm && <FormCard setOpenForm={setOpenForm} openForm={openForm} />}
    </>
  );
};

export default HomeContent;

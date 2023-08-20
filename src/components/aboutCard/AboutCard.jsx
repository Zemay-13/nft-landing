import styles from "./AboutCard.module.scss";
const AboutCard = ({ cardImg, cardText }) => {
  return (
    <div className={styles.aboutCard}>
      <div className={styles.aboutCard__container}>
        <img src={cardImg} className={styles.container__img} alt="cardImg" />
        <p className={styles.container__text}>{cardText}</p>
      </div>
      <div className={styles.aboutCard__detailBottom}></div>
    </div>
  );
};

export default AboutCard;

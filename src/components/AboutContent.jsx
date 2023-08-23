import AboutCard from "./aboutCard/AboutCard";
import starSmile from "../assets/image/starSmile.svg";
import dollarSmile from "../assets/image/dollarSmile.svg";
import linguaSmile from "../assets/image/linguaSmile.svg";
import glassesSmile from "../assets/image/glassesSmile.svg";
import decorBg from "../assets/image/decorBgAbout.svg";
import decorCircleBlue from "../assets/image/decorCircleBlue.svg";
import decorCirclePurpleTop from "../assets/image/decorPurple.svg";
import decorCirclePurpleBottom from "../assets/image/decorPurpleOpacity.svg";

import styles from "./AboutContent.module.scss";

const AboutContent = () => {
  return (
    <div className={styles.aboutContent}>
      <img src={decorBg} className={styles.aboutContent__decorBgRight} />
      <h1 className={styles.aboutContent__title}>Что даст тебе обучение?</h1>
      <div className={styles.aboutContent__cards}>
        <AboutCard
          cardImg={starSmile}
          cardText="Откроешь свой первый криптокошелек и научишься с ним работать"
        />
        <AboutCard
          cardImg={linguaSmile}
          cardText="Поймёшь, как выбирать правильные дропы"
        />

        <AboutCard
          cardImg={glassesSmile}
          cardText="Узнаешь кто такие холдеры и флипперы"
        />
      </div>
      <img src={decorBg} className={styles.aboutContent__decorBgLeft} />
      <img
        src={decorCircleBlue}
        className={styles.aboutContent__decorCircleBlue}
      />
      <img
        src={decorCirclePurpleTop}
        className={styles.aboutContent__decorCirclePurpleTop}
      />
      <img
        src={decorCirclePurpleBottom}
        className={styles.aboutContent__decorCirclePurpleBottom}
      />
    </div>
  );
};

export default AboutContent;

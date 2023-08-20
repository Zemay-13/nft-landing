import Header from "./Header";
import decorBg from "../assets/image/header-bg-decor.svg";
import HomeContent from "./HomeContent";

import styles from "./Home.module.scss";
const Home = () => {
  return (
    <div className={styles.home}>
      <img src={decorBg} className={styles.home__decor} />
      <div className={styles.home__container}>
        <Header />
        <HomeContent />
      </div>
    </div>
  );
};

export default Home;

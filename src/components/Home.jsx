import Header from "./Header";
import decorBg from "../assets/image/header-bg-decor.svg";
import { useState } from "react";
import HomeContent from "./HomeContent";

import styles from "./Home.module.scss";
const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openForm, setOpenForm] = useState(true);
  return (
    <div
      className={
        openMenu || openForm ? `${styles.home} ${styles.homeBlur}` : styles.home
      }
    >
      <img src={decorBg} className={styles.home__decor} />
      <div className={styles.home__container}>
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <HomeContent openForm={openForm} setOpenForm={setOpenForm} />
      </div>
    </div>
  );
};

export default Home;

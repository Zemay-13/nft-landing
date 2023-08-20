import logo from "../assets/image/logo.svg";
import Menu from "./menu/Menu";
import { HiOutlineX } from "react-icons/hi";
import { useState } from "react";

import styles from "./Header.module.scss";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.header__logo} />
      <div className={styles.header__container}>
        <nav className={styles.container__nav}>
          <a href="#">Главная</a>
          <a href="#">Что даст обучение</a>
        </nav>
        <button className={styles.container__button}>Личный кабинет</button>
        <div
          onClick={() => setOpenMenu(true)}
          className={styles.header__burger}
        >
          {openMenu ? (
            <HiOutlineX className={styles.burger__close} />
          ) : (
            <div>
              <div className={styles.burger__menu}></div>
              <div className={styles.burger__menu}></div>
            </div>
          )}
        </div>
        {openMenu && <Menu onClose={() => setOpenMenu(false)} />}
      </div>
    </header>
  );
};

export default Header;

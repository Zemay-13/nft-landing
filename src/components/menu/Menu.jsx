import logo from "../../assets/image/logo.svg";
import { HiOutlineX } from "react-icons/hi";

import styles from "./Menu.module.scss";
const Menu = ({ setOpen }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__header}>
        <img src={logo} alt="logo" className={styles.menu__logo} />
        <HiOutlineX
          className={styles.menu__close}
          onClick={() => setOpen(!open)}
        />
      </div>
      <nav className={styles.menu__nav}>
        <a href="#">Главная</a>
        <a href="#">Что даст обучение</a>
      </nav>
      <button className={styles.menu__button}>Личный кабинет</button>
    </div>
  );
};

export default Menu;

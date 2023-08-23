import circleLogo from "../assets/image/decorPurple.svg";

import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src={circleLogo} alt="logo" />
        <h1>Hello</h1>
      </div>

      <div className={styles.header__container}>
        <nav className={styles.container__nav}>
          <a href="#">Ответы на вопросы</a>
        </nav>

        <div
          onClick={() => setOpenMenu(true)}
          className={styles.header__burger}
        ></div>
      </div>
    </header>
  );
};

export default Header;

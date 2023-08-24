import { HiOutlineX } from "react-icons/hi";
import decorBg from "../../assets/image/decor-bg-green.svg";

import styles from "./LinkCard.module.scss";

const LinkCard = ({ onClose }) => {
  return (
    <div className={styles.bg}>
      <div className={styles.fc}>
        <HiOutlineX className={styles.fc__close} onClick={onClose} />
        <div className={styles.fc__content}>
          <p className={styles.content__text}>
            Исходники приложения доступны в публичном репозитории на Github:
          </p>
          <p className={styles.content__Link}>
            https://github.com/Zemay-13/yandex-practicum-test-task.git
          </p>
        </div>
        <img src={decorBg} alt="" className={styles.fc__decorBg} />
      </div>
    </div>
  );
};

export default LinkCard;

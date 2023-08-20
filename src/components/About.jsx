import React from "react";

import styles from "./About.module.scss";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <div className={styles.about}>
      <AboutContent />
    </div>
  );
};

export default About;

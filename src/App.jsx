import Home from "./components/Home";
import About from "./components/About";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Home />
      <About />
    </div>
  );
}

export default App;

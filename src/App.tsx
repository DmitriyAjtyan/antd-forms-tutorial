import styles from "./App.module.css";
import { MyForm } from "@components";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.formContainer}>
        <MyForm />
      </div>
    </div>
  );
};

export default App;

import VariablesHeader from "./variables-header";
import styles from "./style.module.sass";

export default function Variaveis() {
    return (
    <div className={styles.flexContainer}>
      <div className={styles.header}>
        <VariablesHeader/>
        ola
      </div>
    </div>
    )
  }
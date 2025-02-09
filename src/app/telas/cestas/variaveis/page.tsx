//import DeletableRandomList from "../baskets-components/content/shopping-list/deletable-random-list";
// import DeletableRandomList from "../baskets-components/content/shopping-list/deletable-random-list";

import SalesScreen from "../baskets-components/content/sales/sales-screen";


import Header from "../baskets-components/header/header";
import styles from "./style.module.sass";

export default function Variaveis() {
    return (
    <div className={styles.flexContainer}>
      <div className={styles.header}>
        <Header/>
      </div>
      <div className={styles.content}>
        {/* <DeletableRandomList/> */}
        <SalesScreen/>
      </div>
    </div>
    )
  }
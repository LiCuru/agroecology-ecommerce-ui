"use client"

//import DeletableRandomList from "../baskets-components/content/shopping-list/deletable-random-list";
import NotDeletableRandomList from "../baskets-components/content/shopping-list/not-deletable-random-list";
import { useState } from "react";
import SalesScreen from "../baskets-components/content/sales/sales-screen";


import Header from "../baskets-components/header/header";
import styles from "./style.module.sass";

export default function Variaveis() {

  const [content, setContent] = useState<string>('additionals')

  let theContent;

  switch(content){
    case 'additionals':
      theContent = <SalesScreen/>;
      break;
    case 'nextBasket':
      theContent = <NotDeletableRandomList/>
  }

    return (
    <div className={styles.flexContainer}>
      <div className={styles.header}>
        <Header
          content = {content}
          setContent = {setContent}
        />
      </div>
      <div className={styles.content}>
        {theContent}  
      </div>
    </div>
    )
  }
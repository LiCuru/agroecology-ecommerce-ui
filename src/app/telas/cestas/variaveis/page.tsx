"use client"

import DeletableRandomList from "../baskets-components/content/shopping-list/deletable-random-list";
import NotDeletableRandomList from "../baskets-components/content/shopping-list/not-deletable-random-list";
import { useState } from "react";
import SalesScreen from "../baskets-components/content/sales/sales-screen";


import Header from "../baskets-components/header/header";
import styles from "./style.module.sass";

export default function Variaveis() {

  const [content, setContent] = useState<string>('additionalsSales')
  const [cart, setCart] = useState<boolean>(false)

  const handleCartClick = () => {
    setContent('additionalsCart')
    setCart(true)
  }


  let renderedContent;

  switch(content){
    case 'additionalsSales':
      renderedContent = <SalesScreen/>;
      break;
    case 'additionalsCart':
      renderedContent = <DeletableRandomList/>;
      break;
    case 'nextBasket':
      renderedContent = <NotDeletableRandomList/>
  }

    return (
    <div className={styles.flexContainer}>
      <div className={styles.header}>
        <Header
          content = {content}
          setContent = {setContent}

          handleCartClick = {handleCartClick}
          cart = {cart}
        />
      </div>
      <div className={styles.content}>
        {renderedContent}  
      </div>
    </div>
    )
  }
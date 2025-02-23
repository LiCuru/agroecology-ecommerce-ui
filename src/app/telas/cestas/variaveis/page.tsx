"use client"

import DeletableRandomList from "../baskets-components/content/shopping-list/deletable-random-list";
import NotDeletableRandomList from "../baskets-components/content/shopping-list/not-deletable-random-list";
import { useState } from "react";
import SalesScreen from "../baskets-components/content/sales/sales-screen";


import Header from "../baskets-components/header/header";
import styles from "./style.module.sass";

export default function Variaveis() {

  const [cart, setCart] = useState<boolean>(false)
  const [sales, setSales] = useState<boolean>(true)
  const [additionalsContent, setadditionalsContent] = useState<string>('additionalsSales')
  const [content, setContent] = useState<string>(additionalsContent)

  const handleCartClick = () => {
    setadditionalsContent('additionalsCart')
    setContent('additionalsCart')
    setCart(true)
    setSales(false)
  }

  const handleSalesClick = () => {
    setadditionalsContent('additionalsSales')
    setContent('additionalsSales')
    setCart(false)
    setSales(true)
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
          setContent = {setContent}

          additionalsContent = {additionalsContent}

          handleCartClick = {handleCartClick}
          cart = {cart}

          handleSalesClick = {handleSalesClick}  
          sales = {sales}
        />
      </div>
      <div className={styles.content}>
        {renderedContent}  
      </div>
    </div>
    )
  }
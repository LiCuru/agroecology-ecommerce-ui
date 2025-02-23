"use client"
import ContextLine from "./context-line";
import CollapsableBit from "./collapsable-bit";
import styles from "./header.module.sass";
import { useState } from "react";

// import DisplayItemRowHeader from "../content/shopping-list/item-rows-header/display-item-row-header";

export default function Header(props:
    {
        additionalsContent: string
        setContent: (arg: string) => void
        handleCartClick: () => void
        cart: boolean

        handleSalesClick: () => void
        sales: boolean
    }
){

    const [nextBasketButton, setNextBasketButton] = useState<boolean>(false);
    const [selectAdditionalsButton, setSelectAdditionalsButton] = useState<boolean>(true);
    const [contextLineButtons, setContextLineButtons] = useState<boolean>(true)

    //NextBasket = Próxima Cesta
    const handleNextBasketClick = () => {
        props.setContent('nextBasket')

        setNextBasketButton(true)
        setSelectAdditionalsButton(false)

        setContextLineButtons(false)
    }

    //Additionals = Variáveis
    const handleAdditionalsClick = () => {
        props.setContent(props.additionalsContent)
        
        setNextBasketButton(false)
        setSelectAdditionalsButton(true)

        setContextLineButtons(true)
    }

    return (
        <div className={styles.header}>
            <CollapsableBit
                nextBasketButton = {nextBasketButton}
                handleNextBasketClick ={handleNextBasketClick} 

                selectAdditionalsButton = {selectAdditionalsButton}
                handleAdditionalsClick = {handleAdditionalsClick}


            />
            <div className={styles.SubMenuBar}>
                <div className={styles.date}>
                    <p className={styles.peh}>09 Fev 2025</p>
                </div>
                <div>
                    <ContextLine
                        contextLineButtons = {contextLineButtons}
                        handleCartClick = {props.handleCartClick}
                        cart = {props.cart}

                        handleSalesClick = {props.handleSalesClick}
                        sales = {props.sales}
                    />
                </div>
            </div>
        </div>
    )
}
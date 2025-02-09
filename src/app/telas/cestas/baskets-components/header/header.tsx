"use client"
import ContextLine from "./context-line";
import CollapsableBit from "./collapsable-bit";
import styles from "./header.module.sass";
import { useState } from "react";
// import DisplayItemRowHeader from "../content/shopping-list/item-rows-header/display-item-row-header";

export default function Header(props:
    {
        content: string
        setContent: (arg: string) => void
    }
){

    const [nextBasketButton, setNextBasketButton] = useState(false);
    const [selectAdditionalsButton, setSelectAdditionalsButton] = useState(true);

    const handleNextBasketClick = () => {
        props.setContent('nextBasket')

        setNextBasketButton(true)
        setSelectAdditionalsButton(false)
    }

    const handleAdditionalsClick = () => {
        props.setContent('additionals')
        setNextBasketButton(false)
        setSelectAdditionalsButton(true)
    }

    return (
        <div className={styles.header}>
            <CollapsableBit
                nextBasketButton = {nextBasketButton}
                handleNextBasketClick ={handleNextBasketClick} 

                selectAdditionalsButton = {selectAdditionalsButton}
                handleAdditionalsClick = {handleAdditionalsClick}

            />
            <div className={styles.variablesSubMenu}>
                <div className={styles.date}>
                    <p className={styles.peh}>09 Fev 2025</p>
                </div>
                <div>
                    <ContextLine/>
                </div>
            </div>
        </div>
    )
}
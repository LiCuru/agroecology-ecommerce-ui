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

    const [nextBasketButton, setNextBasketButton] = useState<boolean>(false);
    const [selectAdditionalsButton, setSelectAdditionalsButton] = useState<boolean>(true);
    const [contextLineButtons, setContextLineButtons] = useState<boolean>(true)

    const handleNextBasketClick = () => {
        props.setContent('nextBasket')

        setNextBasketButton(true)
        setSelectAdditionalsButton(false)

        setContextLineButtons(false)
    }

    const handleAdditionalsClick = () => {
        props.setContent('additionals')
        
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
            <div className={styles.variablesSubMenu}>
                <div className={styles.date}>
                    <p className={styles.peh}>09 Fev 2025</p>
                </div>
                <div>
                    <ContextLine
                        contextLineButtons = {contextLineButtons}
                    />
                </div>
            </div>
        </div>
    )
}
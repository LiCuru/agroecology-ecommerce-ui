import ContextLine from "./context-line";
import CollapsableBit from "./collapsable-bit";
import styles from "./header.module.sass";
// import DisplayItemRowHeader from "../content/shopping-list/item-rows-header/display-item-row-header";

export default function VariablesHeader(){

    const state = {
        nextBasketButton: false,
        selectAdditionalsButton: true,
    }

    return (
        <div className={styles.header}>
            <CollapsableBit
                nextBasketButton = {state.nextBasketButton}
                selectAdditionalsButton = {state.selectAdditionalsButton}

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
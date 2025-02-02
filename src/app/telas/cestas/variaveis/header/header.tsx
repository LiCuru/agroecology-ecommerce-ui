import ButtonsOnTheRight from "./buttons-on-the-right";
import CollapsableBit from "./collapsable-bit";
import styles from "./header.module.sass";
import DisplayItemRowHeader from "./item-row-header/display-item-row-header";

export default function VariablesHeader(){
    return (
        <div className={styles.header}>
            <CollapsableBit/>
            <div className={styles.variablesSubMenu}>
                <div className={styles.currentBasket}>
                    <p className={styles.Pe}>Todos os produtores</p>
                    <p className={styles.Pe}>Todos os produtos</p>
                    <span></span>
                </div>
                <div>
                    <ButtonsOnTheRight/>
                </div>
                
            </div>
            <DisplayItemRowHeader/>
        </div>
    )
}
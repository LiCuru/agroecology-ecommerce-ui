import ButtonsOnTheRight from "./buttons-on-the-right";
import CollapsableBit from "./collapsable-bit";
import styles from "./headers.module.sass";

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
        </div>
    )
}
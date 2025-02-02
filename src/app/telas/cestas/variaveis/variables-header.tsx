import CollapsableBit from "./collapsable-bit";
import styles from "./headers.module.sass";

export default function VariablesHeader(){
    return (
        <div className={styles.header}>
            <CollapsableBit/>
            <div className={styles.variablesSubMenu}>
                <div className={styles.currentBasket}>
                    <p>Todos os produtores</p>
                    <p>Todos os produtos</p>
                    <span></span>
                </div>
            </div>
        </div>
    )
}
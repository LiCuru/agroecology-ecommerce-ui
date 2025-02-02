import CollapsableBit from "./collapsable-bit";
import styles from "./style.module.sass";

export default function VariablesHeader(){
    return (
        <div className={styles.header}>
            <div className={styles.variablesSubMenu}>
                <CollapsableBit/>
                <div className={styles.currentBasket}>
                    <p>Todos os produtores</p>
                    <p>Todos os produtos</p>
                    <span></span>
                </div>
            </div>
        </div>
    )
}
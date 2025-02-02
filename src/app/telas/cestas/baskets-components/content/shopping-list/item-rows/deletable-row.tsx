import styles from '../rows.module.sass';

export default function DeletableRow (
    props: { 
        itemName: string ,
        itemPortion: string,
        itemPrice: number,
        chosenQuantity: number,
        totalItemPrice: number
    }) {
    return(
        <div className={styles.itemRow}>
            <div className={styles.itemInfoDiv}>
                <span>{props.itemName}</span>
            </div>
            <div className={styles.itemInfoDiv}>
                <span>{props.itemPortion}</span>
            </div>
            <div className={styles.itemInfoDiv}>
                <span>R$: {props.itemPrice}</span>
            </div>
            <div className={styles.itemInfoDiv}>
                <span>{props.chosenQuantity}</span>
            </div>
            <div className={styles.itemInfoDiv}>
                <span>R$: {props.totalItemPrice}</span>
            </div>
            <div className={styles.itemInfoDiv}>
                <span>X</span>
            </div>
        </div>
    );
  };
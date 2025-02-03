import styles from '../rows.module.sass';

export default function NotDeletableRow (
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
                <span>R$: {props.itemPrice.toFixed(2)}</span>
            </div>
            <div className={styles.itemInfoDiv}>
                <span>{props.chosenQuantity}</span>
            </div>
            <div className={styles.itemInfoDiv}>
                <span>R$: {props.totalItemPrice.toFixed(2)}</span>
            </div>
        </div>
    );
  };
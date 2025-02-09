import styles from './rows-total.module.sass';

export default function NotDeletableRowTotal (
    props: {
        totalPrice: number
    }) {
  return(
      <div className={styles.itemRow}>
          <div className={styles.itemInfoDiv}>
              <span></span>
          </div>
          <div className={styles.itemInfoDiv}>
              <span></span>
          </div>
          <div className={styles.itemInfoDiv}>
              <span></span>
          </div>
          <div className={styles.itemInfoDiv}>
              <span>TOTAL</span>
          </div>
          <div className={styles.itemInfoDiv}>
              R$: <span>{props.totalPrice}</span>
          </div>
      </div>
  );
};
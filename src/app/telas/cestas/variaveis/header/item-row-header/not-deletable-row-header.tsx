import styles from './rows.module.sass';

export default function NotDeletableRowHeader(){
    return(
        <div className={styles.itemRow}>
          <div className={styles.itemInfoDiv}>
              <span>Produto</span>
          </div>
          <div className={styles.itemInfoDiv}>
              <span>porção</span>
          </div>
          <div className={styles.itemInfoDiv}>
              <span>R$ por porção</span>
          </div>
          <div className={styles.itemInfoDiv}>
              <span>QTD</span>
          </div>
          <div className={styles.itemInfoDiv}>
              <span>R$ total</span>
          </div>
        </div>
    )
}
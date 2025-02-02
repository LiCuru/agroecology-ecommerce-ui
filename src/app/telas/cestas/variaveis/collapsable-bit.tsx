import styles from './headers.module.sass';

function NextBasketButton(){

    return(
        <div className={styles.options}>
            <span>Próxima Cesta</span>
        </div>
    )
}

function SelectVariablesButton(){
    return (
    <div className={styles.options}>
        <span>Variáveis</span>
    </div>
    )
}


function NextBasketAndVariables(){
    return(
        <div className ={styles.mainContainer}>
                <div className={styles.titleGap}>
                    <div className={styles.title}>
                    <span className={styles.span}>Variáveis</span>
                    </div>
                    <div className={styles.variablesNavTabs}>
                        <NextBasketButton/>
                        <SelectVariablesButton/>
                    </div>
                </div>
            </div>
    )
}

export default function CollapsableBit(){
    return(
        <div className={styles.mainContainer}>
            <NextBasketAndVariables/>
        </div>
    )
}
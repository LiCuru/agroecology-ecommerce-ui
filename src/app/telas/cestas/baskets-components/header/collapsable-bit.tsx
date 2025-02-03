import { ComboboxDemo } from '@/app/customized-components/combo-box/combo-box';
import styles from './header.module.sass';

function NextBasketOption(){

    return(
        <div className={styles.options}>
            <span>Próxima Cesta</span>
        </div>
    )
}

function SelectAdditionalsOption(
    props:{
        tipo: string
    }
){
    return (
    <div className={styles.options}>
        <span>{props.tipo}</span>
    </div>
    )
}

function Dropdowns(){
    return(
        <div className={styles.mainContainer}>
          <div className={styles.producerDropdown}>
            <ComboboxDemo
                tipo = 'selecionar produtor'
            />
          </div>
          <div className={styles.producerDropdown}>
            <ComboboxDemo
                tipo = 'selecionar produto'
            />
          </div>
        </div>
      );
}


function NextBasketAndAdditionals(
    props:{
        tipo: string
    }
){
    return(
        <div className ={styles.mainContainer}>
            <div className={styles.titleGap}>
                <div className={styles.title}>
                <span className={styles.span}>{props.tipo}</span>
                </div>

                <div className={styles.variablesNavTabs}>
                    <NextBasketOption/>
                    <SelectAdditionalsOption
                        tipo = {props.tipo}
                    />
                </div>
            </div>
        </div>
    )
}

export default function CollapsableBit(){
    return(
        <div className={styles.mainContainer}>
            <NextBasketAndAdditionals
                tipo = 'Variáveis'
            />
            <Dropdowns/>
        </div>
    )
}
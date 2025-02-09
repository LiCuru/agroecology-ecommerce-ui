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

    const produtores = [
        {
          value: "Todos os produtores",
          label: "Todos os produtores",
        },
        {
          value: "Rose Amarandi",
          label: "Rose Amarandi",
        },
        {
          value: "Lilian Pedroso",
          label: "Lilian Pedroso",
        },
        {
          value: "Cecília Teixeira",
          label: "Cecília Teixeira",
        },
        {
          value: "Margarida Serena",
          label: "Margarida Serena",
        },
        {
          value: "Joaquim Genésio",
          label: "Joaquim Genésio",
        },
        {
          value: "Pedro Novalle",
          label: "Pedro Novalle",
        },
        {
          value: "Mariana Rosa",
          label: "Mariana Rosa",
        },
        {
          value: "José Gomes",
          label: "José Gomes",
        },
        {
          value: "Lucas Silva",
          label: "Lucas Silva",
        },
      ]

      const tiposDeProduto = [
        {
          value: "Todas as categorias",
          label: "Todas as categorias",
        },
        {
          value: "Hortaliças",
          label: "Hortaliças",
        },
        {
          value: "Processados",
          label: "Processados",
        },
        {
          value: "Grãos",
          label: "Grãos",
        },
        {
          value: "Bebidas Prontas",
          label: "Bebidas Prontas",
        },
        {
          value: "Chás",
          label: "Chás",
        },
        {
          value: "Laticínios",
          label: "Laticínios",
        },
      ]


    return(
        <div className={styles.mainContainer}>
          <div className={styles.producerDropdown}>
            <ComboboxDemo
                tipo = 'selecionar produtor'
                opcoes = {produtores}
            />
          </div>
          <div className={styles.producerDropdown}>
            <ComboboxDemo
                tipo = 'selecionar categoria'
                opcoes={tiposDeProduto}
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
import { ComboboxDemo } from '@/app/customized-components/combo-box/combo-box';
import styles from './header.module.sass';
import { useState } from 'react';
import Image from "next/image";

function NextBasketOption(
  props : {
    nextBasketButton: boolean
    handleNextBasketClick: () => void
  }
){

    return(
        <div
          className={props.nextBasketButton ? styles.optionsSelected : styles.options}
          onClick = {props.handleNextBasketClick}>
            <span>Próxima Cesta</span>
        </div>
    )
}

function SelectAdditionalsOption(
    props:{
      tipo: string
      selectAdditionalsButton: boolean
      handleAdditionalsClick: () => void
    }
){
    return (
    <div
      className={props.selectAdditionalsButton ? styles.optionsSelected : styles.options}
      onClick = {props.handleAdditionalsClick}>
        <span>{props.tipo}</span>
    </div>
    )
}

function NextBasketAndAdditionals(
  props:{
      tipo: string,
      nextBasketButton: boolean,
      selectAdditionalsButton: boolean
      handleNextBasketClick : () => void
      handleAdditionalsClick: () => void
  }
){
  return(
      <div className ={styles.firstContainer}>
          <div className={styles.titleGap}>
              <div className={styles.title}>
              <span className={styles.span}>{props.tipo}</span>
              </div>

              <div className={styles.additionalsNavTabs}>
                  <NextBasketOption
                    nextBasketButton = {props.nextBasketButton}
                    handleNextBasketClick = {props.handleNextBasketClick}
                  />
                  <SelectAdditionalsOption
                    selectAdditionalsButton = {props.selectAdditionalsButton}
                    handleAdditionalsClick = {props.handleAdditionalsClick}
                    tipo = {props.tipo}
                  />
              </div>
          </div>
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

function Arrow(
  props:{
    handleArrowClick: () => void,
    nextBasketAndAdditionals: boolean
  }
){
  return(
    <div className={styles.arrowDiv}>
      <div 
        className={styles.arrow}
        onClick={props.handleArrowClick}
      >
       {props.nextBasketAndAdditionals? '▲': '▼'}
      </div>
    </div>
  )
}



export default function CollapsableBit(
  props:{
  nextBasketButton: boolean,
  selectAdditionalsButton: boolean
  handleNextBasketClick:  () => void
  handleAdditionalsClick: () => void
  }){
    

  const handleArrowClick = () => {
    setNextBasketAndAdditionals(!nextBasketAndAdditionals)
  }

  const [nextBasketAndAdditionals, setNextBasketAndAdditionals] = useState<boolean>(true)

    return(
      <div className={styles.hiddenDivAndCollapsableContainer}>
        <div className={styles.logo}>
            <Image
                src= {'/logo-completo.jpg'}
                alt='logo do Livres'
                width={200}
                height={200}
                style = {{ margin: 'auto' }}
            />
        </div>
        <div className={styles.collapsableBitContainer}>
            {nextBasketAndAdditionals &&
            <NextBasketAndAdditionals
              nextBasketButton = {props.nextBasketButton}
              handleAdditionalsClick = {props.handleAdditionalsClick}


              selectAdditionalsButton = {props.selectAdditionalsButton}
              handleNextBasketClick = {props.handleNextBasketClick}
              tipo = 'Variáveis'
            />}
            <div className = {styles.dropdownsAndArrow}>
              <Dropdowns/>
              <Arrow
                handleArrowClick = {handleArrowClick}
                nextBasketAndAdditionals = {nextBasketAndAdditionals}
              />
            </div>
        </div>
      </div>
    )
}
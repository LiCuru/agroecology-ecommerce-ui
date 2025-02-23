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
   


    return(
        <div className={styles.mainContainer}>
          <div className={styles.producerDropdown}>
            <ComboboxDemo
                tipo = 'selecionar produtor'
                fetchApi = '/api/produtores'
            />
          </div>
          <div className={styles.producerDropdown}>
            <ComboboxDemo
                tipo = 'selecionar categoria'
                fetchApi = '/api/produtores'
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
  selectAdditionalsButton: boolean,
  handleNextBasketClick:  () => void,
  handleAdditionalsClick: () => void,
  }){
    

  const handleArrowClick = () => {
    setNextBasketAndAdditionals(!nextBasketAndAdditionals)
  }

  const [nextBasketAndAdditionals, setNextBasketAndAdditionals] = useState<boolean>(true)

    return(
      <div className={styles.hiddenDivAndCollapsableContainer}>
        <div className={styles.logo}>
            <Image
                src= {'/logo_transparente.png'}
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
              <Dropdowns
              />
              <Arrow
                handleArrowClick = {handleArrowClick}
                nextBasketAndAdditionals = {nextBasketAndAdditionals}
              />
            </div>
        </div>
      </div>
    )
}
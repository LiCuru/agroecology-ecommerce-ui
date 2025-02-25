import { ComboboxDemo } from '@/app/customized-components/combo-box/combo-box';
import styles from './header.module.sass';
import { useState } from 'react';
import Image from "next/image";
import { stringify } from 'querystring';

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

function Dropdowns(
  props:
  {
    setProducer : (arg: string) => void
    producer: string

    setCategory : (arg: string) => void
    category: string

  }
){



  const[categoriesDropdownUrl, setCategoriesDropdownUrl] = useState(`/api/categoria-produtos?`)


    function atualizarProdutor(produtor: string){
      props.setProducer(produtor)

      const categoriesDropdownParam = {
        produtor: produtor
      };
    
      const queryString = new URLSearchParams(categoriesDropdownParam).toString();

      setCategoriesDropdownUrl(`/api/categoria-produtos?${queryString}`)
    }

    function atualizarCategoria(categoria: string){
      props.setCategory(categoria)
    }



    return(
        <div className={styles.mainContainer}>
          <div className={styles.producerDropdown}>
            <ComboboxDemo
                tipo = 'produtor'
                fetchApi = '/api/produtores'

                atualizarProdutor = {atualizarProdutor}
            />
          </div>
          <div className={styles.producerDropdown}>
            <ComboboxDemo
                tipo = 'Categoria'
                fetchApi = {categoriesDropdownUrl}

                atualizarCategoria = {atualizarCategoria}
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

  setProducer:(arg: string) => void
  producer: string

  setCategory:(arg: string) => void
  category: string

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
                setProducer = {props.setProducer}
                producer = {props.producer}

                setCategory = {props.setCategory}
                category = {props.category}

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
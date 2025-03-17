import { ComboboxDemo } from '@/app/customized-components/combo-box/combo-box';
import styles from './header.module.sass';
import { useEffect, useState } from 'react';
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

    setSalesScreenFetchUrl: (FetchUrl: string) => void

  }
){



  const[categoriesDropdownUrl, setCategoriesDropdownUrl] = useState(`/api/categoria-produtos?produtor=`)

    const [producer, setProducer] = useState<string>('')
    const [category, setCategory] = useState<string>('')


    useEffect(() => {
      // This will run whenever `producer` changes
      const categoriesDropdownParam = {
        produtor: producer,
      };
      const queryString = new URLSearchParams(categoriesDropdownParam).toString();
      setCategoriesDropdownUrl(`/api/categoria-produtos?${queryString}`);
    
      const salesScreenParams = {
        producer: producer,
        category: category,
      };

      const salesQueryString = new URLSearchParams(salesScreenParams).toString();
      props.setSalesScreenFetchUrl(`/api/sales-products?${salesQueryString}`);
      console.log('props.setSalesScreenFetchUrl ----' + `/api/sales-products?${salesQueryString}`)
    }, [producer, category]); // Run this effect when `producer` or `category` changes




    return(
        <div className={styles.mainContainer}>
          <div className={styles.producerDropdown}>
            <ComboboxDemo
                tipo = 'produtor'
                fetchApi = '/api/produtores'
                setProducer = {setProducer}
            />
          </div>
          <div className={styles.producerDropdown}>
            <ComboboxDemo
                tipo = 'Categoria'
                fetchApi = {categoriesDropdownUrl}
                setCategory = {setCategory}

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

  setSalesScreenFetchUrl: (FetchUrl: string) => void

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

                setSalesScreenFetchUrl = {props.setSalesScreenFetchUrl}

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
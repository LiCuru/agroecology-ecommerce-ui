import styles from "./product-avatar.module.sass";
import Image from 'next/image';

export default function ProductAvatar(
    props: {
        key : number,
        productPicture: string|null,
        name: string,
        portion: string,
        preco_mercado: number,
        preco_lojinha: number,
        preco: number
    }
){

    const productPicture = props.productPicture;

    return(
    <div className={styles.productAvatar}>
      <Image
        className={styles.productImage} 
        src={productPicture? "https://livresbs.com.br/"+productPicture : "https://livresbs.com.br/images/produtos/padrao.png"} // Path to the image in the `public` folder
        alt= "foto do produto"
        width={100} // Desired width
        height={100} // Desired height
      />
      <div className={styles.productDescription}>
        <p className={styles.productName}>{props.name}</p>
        <p className={styles.productDetail}>{props.portion}</p>
        <div className={styles.productDetail}>
          <Image
          className={styles.productPriceImage} 
          src={"https://livresbs.com.br/produtos/icon-livremercado.png"} // Path to the image in the `public` folder
          alt= "foto do tipo de preço"
          width={100} // Desired width
          height={100} // Desired height
          />
          R$ {props.preco_mercado.toFixed(2)}
        </div>
        <div className={styles.productDetail}>
          <Image
          className={styles.productPriceImage} 
          src={"https://livresbs.com.br/produtos/icon-consciente.png"} // Path to the image in the `public` folder
          alt= "foto do tipo de preço"
          width={100} // Desired width
          height={100} // Desired height
          />
          R$ {props.preco_lojinha.toFixed(2)}
        </div>
        <div className={styles.productDetailSelected}>
          <Image
          className={styles.productPriceImage} 
          src={"https://livresbs.com.br/produtos/icon-comboio.png"} // Path to the image in the `public` folder
          alt= "foto do tipo de preço"
          width={100} // Desired width
          height={100} // Desired height
          />
          R$ {props.preco.toFixed(2)}
          <div className = {styles.productDiscount}>
            {(100 - (props.preco_mercado * 100)/props.preco).toFixed(0)} %
          </div>
        </div>
      </div>
      
      <div className={styles.setOfQuantityButtons}>
        <div className={styles.quantityButton}>
          <p>-</p>
        </div>
        <div className={styles.quantityDisplayer}>
          <p>0</p>
        </div>
        <div className={styles.quantityButton}>
          <p>+</p>
        </div>
      </div>
    </div>
    )
}
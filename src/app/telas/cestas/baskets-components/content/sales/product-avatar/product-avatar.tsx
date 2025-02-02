import styles from "./product-avatar.module.sass";
import Image from 'next/image';

export default function ProductAvatar(
    props: {
        speciesPicture: string,
        name: string,
        portion: string,
        price: number
    }
){

    const speciesPicture = props.speciesPicture;

    return(
    <div className={styles.productAvatar}>
      <Image
        className={styles.productImage} 
        src={"/photos/plantsByScientificName/"+speciesPicture+"/Principal.jpg"} // Path to the image in the `public` folder
        alt="foto do produto"
        width={100} // Desired width
        height={100} // Desired height
      />
      <div className={styles.productDescription}>
        <p className={styles.productName}>{props.name}</p>
        <p className={styles.productDetail}>{props.portion}</p>
        <p className={styles.productDetail}>R$ {props.price.toFixed(2)}</p>
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
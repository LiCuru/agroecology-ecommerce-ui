import styles from './header.module.sass';
import Image from 'next/image';

function TotalInNavbar(){
    return(
    <div className={styles.TotalInNavbar}>
        <p className={styles.Pe}>13 produtos</p>
        <p className={styles.Pe}>R$ 101,00</p>
    </div>
    )
}

function TrolleyDiv(){
    return(
        <div className={styles.trolleyDiv}>
            <Image
                src="/trolleyAzure.png" // Path to the image in the `public` folder
                alt="My Image"
                width={25} // Desired width
                height={25} // Desired height
            />
        </div>
    )
}




export default function ContextLine(){
    return(
        <div className={styles.contextLine}>
            <TotalInNavbar/>
            <TrolleyDiv/>
          </div>
    )
}
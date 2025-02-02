import Image from 'next/image';
import ContactInfo from './contact-info';
import styles from '../sales.module.sass'


export default function ProducerAvatar(){
    return(
        <div>
            <Image
                className={styles.salesFrame} 
                src="/photos/users/face11.png" // Path to the image in the `public` folder
                alt="foto do produtor"
                width={100} // Desired width
                height={100} // Desired height
            />
            <h3   className={styles.profileName}>Joaquim Genésio</h3>
            <ContactInfo
                facebook = 'rede.livres.produtosdobem.bs'
                instagram = 'livresbaixadasantista'
                phoneNumber = '(13) 9 9999-9999'
            />
      </div>
    )
}
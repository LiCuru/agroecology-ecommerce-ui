import Image from 'next/image';
import styles from './contact-info.module.sass'

export default function ContactInfo(
    props:{
        facebook: string,
        instagram: string,
        phoneNumber: string
    }
){
    return(
    <div className={styles.contactInfo}>
        <div className={styles.tableDiv}>
            <div className={styles.tableCellDiv}>
                <div className={styles.contactRow}>
                <div className={styles.logoDiv}>
                    <Image
                        className={styles.logo} 
                        src="/icons/facebookLogoWhite.png" // Path to the image in the `public` folder
                        alt="facebook logo"
                        width={25} // Desired width
                        height={25} // Desired height
                    />
                </div>
                <div className={styles.textDiv}>{props.facebook}</div>
                </div>
            </div>
        </div>
    <div className={styles.tableDiv}>
      <div className={styles.tableCellDiv}>
        <div className={styles.contactRow}>
          <div className={styles.logoDiv}>
            <Image
                className={styles.logo} 
                src="/icons/instagramLogoWhite.png" // Path to the image in the `public` folder
                alt="instagram logo"
                width={25} // Desired width
                height={25} // Desired height
            />
          </div>
        <div className={styles.textDiv}>{props.instagram}</div>
      </div>
    </div>
    </div>
    
      <div className={styles.tableDiv}>
        <div className={styles.tableCellDiv}>
            <div className={styles.contactRow}>
                <div className={styles.logoDiv}>
                    <Image
                        className={styles.logo} 
                        src="/icons/phoneIcon.png" // Path to the image in the `public` folder
                        alt="phone logo"
                        width={25} // Desired width
                        height={25} // Desired height
                    />
                </div>
                <div className={styles.textDiv}>{props.phoneNumber}</div>
            </div>
        </div>
      </div>
    </div>
)
}
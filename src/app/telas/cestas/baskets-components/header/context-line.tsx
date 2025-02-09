import styles from './header.module.sass';
import Image from 'next/image';

function TotalInNavbar(
    props:{
        handleSalesClick: () => void
        sales: boolean
    }){
    return(
    <div 
        className={props.sales? styles.SelectedTotalInNavbar : styles.TotalInNavbar}
        onClick = {props.handleSalesClick}>
        <p className={styles.Pe}>13 produtos</p>
        <p className={styles.Pe}>R$ 101,00</p>
    </div>
    )
}

function Cart(
    props:{
        handleCartClick: () => void
        cart: boolean
    }

){
    return(
        <div className={props.cart ? styles.SelectedTrolleyDiv: styles.trolleyDiv}>
            <Image
                src="/trolleyAzure.png" // Path to the image in the `public` folder
                alt="My Image"
                width={25} // Desired width
                height={25} // Desired height
                onClick = {props.handleCartClick}

            />
        </div>
    )
}

export default function ContextLine(
    props:{
        contextLineButtons: boolean
        handleCartClick: () => void
        cart: boolean

        handleSalesClick: () => void
        sales: boolean
    }
)

{
    let display;
    if (props.contextLineButtons === true){
        display = 
        <div className={styles.contextLine}>
            <TotalInNavbar
                handleSalesClick = {props.handleSalesClick}
                sales = {props.sales}
            />
            <Cart
                handleCartClick = {props.handleCartClick}
                cart = {props.cart}
            />
        </div>
    } else if (props.contextLineButtons === false){
        display = ''
    }

    return(
        display
    )
}
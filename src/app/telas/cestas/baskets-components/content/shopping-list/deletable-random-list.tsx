import DeletableRowHeader from "./item-rows-header/deletable-row-header";
import DeletableRowTotal from "./item-rows-total/deletable-row-total";
import DeletableRow from "./item-rows/deletable-row";
import styles from './rows.module.sass';



export default function DeletableRandomList(){
    return(
        <div className={styles.listContainer}>
            <DeletableRowHeader/>
            <DeletableRow
            itemName='Jatobá'
            itemPortion='250g'
            itemPrice = {5.00}
            chosenQuantity= {1}
            totalItemPrice= {5.00}
            />
            <DeletableRow
            itemName='Jatobá'
            itemPortion='250g'
            itemPrice = {5}
            chosenQuantity= {1}
            totalItemPrice= {5}
            />
            <DeletableRow
            itemName='Jatobá'
            itemPortion='250g'
            itemPrice = {5}
            chosenQuantity= {1}
            totalItemPrice= {5}
            />
            <DeletableRow
            itemName='Jatobá'
            itemPortion='250g'
            itemPrice = {5}
            chosenQuantity= {1}
            totalItemPrice= {5}
            />
            <DeletableRow
            itemName='Jatobá'
            itemPortion='250g'
            itemPrice = {5.00}
            chosenQuantity= {1}
            totalItemPrice= {5.00}
            />
            <DeletableRow
            itemName='Jatobá'
            itemPortion='250g'
            itemPrice = {5}
            chosenQuantity= {1}
            totalItemPrice= {5}
            />
            <DeletableRow
            itemName='Jatobá'
            itemPortion='250g'
            itemPrice = {5}
            chosenQuantity= {1}
            totalItemPrice= {5}
            />
            <DeletableRow
            itemName='Jatobá'
            itemPortion='250g'
            itemPrice = {5}
            chosenQuantity= {1}
            totalItemPrice= {5}
            />
            <DeletableRow
            itemName='Jatobá'
            itemPortion='250g'
            itemPrice = {5.00}
            chosenQuantity= {1}
            totalItemPrice= {5.00}
            />
            <DeletableRow
            itemName='Jatobá'
            itemPortion='250g'
            itemPrice = {5}
            chosenQuantity= {1}
            totalItemPrice= {5}
            />
            <DeletableRow
            itemName='Jatobá'
            itemPortion='250g'
            itemPrice = {5}
            chosenQuantity= {1}
            totalItemPrice= {5}
            />
            <DeletableRow
            itemName='Jatobá'
            itemPortion='250g'
            itemPrice = {5}
            chosenQuantity= {1}
            totalItemPrice= {5}
            />
            <DeletableRowTotal
                totalPrice = {50.00}
            />
        </div>
    )
}
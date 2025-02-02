import ProducerAvatar from "./producer-avatar/producer-avatar";
import ProductAvatar from "./product-avatar/product-avatar";
import styles from './sales.module.sass'

export default function SalesScreen(){
    return(
        <div className={styles.salesFrame}>
            <ProducerAvatar/>
            <h3 className={styles.productType}>hortaliças</h3>
            <div className={styles.productsDiv}>
                <ProductAvatar
                    speciesPicture = 'Artocarpussp'
                    name = 'Fruta Pão'
                    portion = '1 Kg'
                    price = {3}
                />
                <ProductAvatar
                    speciesPicture = 'Caryocarbrasiliense'
                    name = 'Pequi'
                    portion = '500 g'
                    price = {10}
                />
                <ProductAvatar
                    speciesPicture = 'Copaiferalangsdorffiidesf'
                    name = 'Copaíba'
                    portion = '300 g'
                    price = {10}
                />
                <ProductAvatar
                    speciesPicture = 'Malfigiaemarginata'
                    name = 'Acerola'
                    portion = '500 g'
                    price = {3}
                />
                <ProductAvatar
                    speciesPicture = 'Aloevera'
                    name = 'Babosa'
                    portion = '500 g'
                    price = {10}
                />
                <ProductAvatar
                    speciesPicture = 'Dipteryxalata'
                    name = 'Barú'
                    portion = '150 g'
                    price = {15}
                />
                <ProductAvatar
                    speciesPicture = 'Eugeniadysenterica'
                    name = 'Cagaita'
                    portion = '500 g'
                    price = {12}
                />
                <ProductAvatar
                    speciesPicture = 'Hymenaeacourbaril'
                    name = 'Jatobá'
                    portion = '500 g'
                    price = {15}
                />
                <ProductAvatar
                    speciesPicture = 'Tamarindusindical'
                    name = 'Tamarindo'
                    portion = '300 g'
                    price = {17}
                />
                <ProductAvatar
                    speciesPicture = 'Malfigiaemarginata'
                    name = 'Acerola'
                    portion = '300 g'
                    price = {17}
                />
                <ProductAvatar
                    speciesPicture = 'Aloevera'
                    name = 'Babosa'
                    portion = '500 g'
                    price = {10}
                />
                <ProductAvatar
                    speciesPicture = 'Dipteryxalata'
                    name = 'Barú'
                    portion = '150 g'
                    price = {15}
                />
            </div>
            <h3 className={styles.productType}>Bebidas</h3>
            <div className={styles.productsDiv}>
                <ProductAvatar
                    speciesPicture = 'Artocarpussp'
                    name = 'Fruta Pão'
                    portion = '1 Kg'
                    price = {3}
                />
                <ProductAvatar
                    speciesPicture = 'Caryocarbrasiliense'
                    name = 'Pequi'
                    portion = '500 g'
                    price = {10}
                />
                <ProductAvatar
                    speciesPicture = 'Copaiferalangsdorffiidesf'
                    name = 'Copaíba'
                    portion = '300 g'
                    price = {10}
                />
                <ProductAvatar
                    speciesPicture = 'Malfigiaemarginata'
                    name = 'Acerola'
                    portion = '500 g'
                    price = {3}
                />
                <ProductAvatar
                    speciesPicture = 'Aloevera'
                    name = 'Babosa'
                    portion = '500 g'
                    price = {10}
                />
                <ProductAvatar
                    speciesPicture = 'Dipteryxalata'
                    name = 'Barú'
                    portion = '150 g'
                    price = {15}
                />
                <ProductAvatar
                    speciesPicture = 'Eugeniadysenterica'
                    name = 'Cagaita'
                    portion = '500 g'
                    price = {12}
                />
                <ProductAvatar
                    speciesPicture = 'Hymenaeacourbaril'
                    name = 'Jatobá'
                    portion = '500 g'
                    price = {15}
                />
                <ProductAvatar
                    speciesPicture = 'Tamarindusindical'
                    name = 'Tamarindo'
                    portion = '300 g'
                    price = {17}
                />
                <ProductAvatar
                    speciesPicture = 'Malfigiaemarginata'
                    name = 'Acerola'
                    portion = '300 g'
                    price = {17}
                />
                <ProductAvatar
                    speciesPicture = 'Aloevera'
                    name = 'Babosa'
                    portion = '500 g'
                    price = {10}
                />
                <ProductAvatar
                    speciesPicture = 'Dipteryxalata'
                    name = 'Barú'
                    portion = '150 g'
                    price = {15}
                />
            </div>
        </div>
    )
}
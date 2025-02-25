import { useEffect, useState } from "react";
import ProducerAvatar from "./producer-avatar/producer-avatar";
import ProductAvatar from "./product-avatar/product-avatar";
import styles from './sales.module.sass'

export default function SalesScreen(
    props:{
        fetchApi: string
    }
){

    type Produto = {
        nome: string,
        categoria: string,
        produtor: string,
        preco_mercado: number,
        preco_lojinha: number,
        preco_pre: number,
        imagem: string
    }

    const [data, setData] = useState<Produto[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    console.log(props.fetchApi)

    useEffect(() => {
    // Fetch data from the API route
    fetch(props.fetchApi)
        .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log(response)
        return response.json() as Promise<Produto[]>;
        })
        .then((data) => {
        setData(data);
        console.log(data)
        setLoading(false);
        })
        .catch((error) => {
        setError(error.message);
        setLoading(false);
        });
    }, [props.fetchApi]);

    if (loading) return 'Loading...';
    if (error) return error;

    console.log(data)
    if (data != null && data.constructor === Array)
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
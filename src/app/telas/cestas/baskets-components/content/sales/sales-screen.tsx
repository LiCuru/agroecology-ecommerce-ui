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
        unidade: string,
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

    console.log('produtos')
    console.log(data)
    if (data != null && data.constructor === Array)
    return(
        <div className={styles.salesFrame}>
            <ProducerAvatar/>
            <h3 className={styles.productType}>hortaliças</h3>
            <div className={styles.productsDiv}>
                {data.map((produto) =>{
                    return(
                    <ProductAvatar
                        key = {produto.nome}
                        speciesPicture = {produto.imagem}
                        name = {produto.nome}
                        price = {produto.preco_pre}
                        portion = {produto.unidade}
                    />)
                })}
            </div>
        </div>
    )
}
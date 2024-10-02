import { useEffect, useState } from "react"
import ProdcutTile from "../components/Product-tile/ProductTile" 
import {Circles} from 'react-loader-spinner'

export default function Home(){

    const  [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

    async function fetchListOfProducts(){
        setLoading(true)
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        if(data){
            setLoading(false);
            setProducts(data);
        }

    }
    useEffect(()=>{
        fetchListOfProducts();
    },[])
    console.log(products)
    return <div>
        {
            loading ? 
            <div className="min-n-screen w-full flex justify-center items-center">
                <Circles
                height={'120'}
                width={'120'}
                color="rgb(127,29,29)"
                visible={true}
                 />
            </div>
            : <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
                {
                    products && products.length 
                    ?
                        products.map((produtItem,i)=> <ProdcutTile product={produtItem} key={i} />)
                    : null
                }
            </div>
        }
    </div>
}

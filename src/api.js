import axios from "axios"

const base_url=process.env.REACT_APP_BASE_ENDPOINT

export const fetchProductList=async()=>{
    const {data}=await axios.get(base_url+"/products")

    return data;
}

export const fetchProduct=async(product_id)=>{
    const {data}=await axios.get(base_url+`/products/${product_id}`)

    return data;
}
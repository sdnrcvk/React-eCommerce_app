import axios from "axios"

const base_url=process.env.REACT_APP_BASE_ENDPOINT

export const fetchProductList=async({pageParam=0})=>{
    const {data}=await axios.get(base_url+"/products?page="+pageParam)

    return data;
}

export const fetchProduct=async(product_id)=>{
    const {data}=await axios.get(base_url+`/products/${product_id}`)

    return data;
}

export const fetchRegister=async(input)=>{
    const {data}=await axios.post(base_url+`/users/`,
        {
            name:"Sedanur Çevik",
            email:input.email,
            password:input.password,
            avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
        }
    );

    return data;
}
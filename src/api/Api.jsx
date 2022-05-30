import axios from "axios"
export const fetchBasic = 'https://lz5cdtbtci.execute-api.ap-northeast-2.amazonaws.com/assignment'

export const fetchProducts = async ()=>{
  try {
    const  {data}  = await axios.get(`${fetchBasic}/products`);
    return data;
  } catch (err) {
    console.log("Error >>", err);
  }
}


export const fetchBrandPrd = async (brandName)=>{
  try {
    const {data} = await axios.get(`${fetchBasic}/products?brand=${brandName}`)
    return data
  } catch(err) {
    console.log("Error >>", err);
  }
}


export const fetchCategories = ()=>{
  return axios.get(`${fetchBasic}/categories`);
}
export const fetchBrands = ()=>{
  return axios.get(`${fetchBasic}/brands`);
}
export const fetchColors = ()=>{
  return axios.get(`${fetchBasic}/colors`);
}
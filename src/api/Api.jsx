import axios from "axios"
const fetchBasic = 'https://lz5cdtbtci.execute-api.ap-northeast-2.amazonaws.com/assignment'

export const fetchProducts = ()=>{
  return axios.get(`${fetchBasic}/products`);
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
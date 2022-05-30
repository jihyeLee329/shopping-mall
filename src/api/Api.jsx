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

//브랜드 상품 카테고리
export const fetchBrandPrd = async(brandName)=>{
  try {
    const {data} = await axios.get(`${fetchBasic}/products?brand=${brandName}`)
    return data
  } catch(err) {
    console.log("Error >>", err);
  }
}

//브랜드에서 색상 선택
export const fetchBrandPrdColor = async(brandName, color)=>{
  try {
    const {data} = await axios.get(`${fetchBasic}/products?brand=${brandName}&color=${color}`)
    return data
  } catch(err) {
    console.log("Error >>", err);
  }
}

//카테고리 리스트
export const fetchCategories =async ()=>{
  try {
    const {data} = await axios.get(`${fetchBasic}/categories`)
    return data
  } catch(err) {
    console.log("Error >>", err);
  }
  // return axios.get(`${fetchBasic}/categories`);
}

//브랜드리스트
export const fetchBrands = ()=>{
  return axios.get(`${fetchBasic}/brands`);
}

// 컬러리스트
export const fetchColors = ()=>{
  return axios.get(`${fetchBasic}/colors`);
}
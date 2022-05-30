import { useRecoilState, useRecoilValue } from "recoil";
import { fetchProducts, fetchBasic, fetchBrandPrd, fetchBrandPrdColor } from "../api/Api";
import { brandAtom, brandPrdAtom, colorsAtom, loadingAtom } from "../atoms";
import styled from "styled-components";
import Product from "../components/Product";
import BackButton from '../components/BackButton'
import { useEffect, useState } from "react";
import Colors from "../components/Colors";

const PrdList = styled.div`
  display: flex;
  justify-content: start;
  margin: 0 auto;
  flex-wrap: wrap;
`;


const H1 = styled.h1`
    font-size:40px; 
    font-wieght:bold; 
    margin:30px 0;
`

export default function Products() {
  const brandName = useRecoilValue(brandAtom);
  const [loading, setLoading] = useRecoilState(loadingAtom);
  const [brandPrd, setBrandPrd] = useRecoilState(brandPrdAtom);
  const [colorPrd, setColorPrd] = useState([])
  const color = useRecoilValue(colorsAtom);

  useEffect(()=>{
    if(brandName !== ''){
      fetchBrandPrd(brandName).then(data=>setBrandPrd(data))
    }
    setLoading(false);
    return ()=> setBrandPrd([]);
  },[]);


  useEffect(()=>{
    if(brandName !== '' && color !== ''){
      fetchBrandPrdColor(brandName,color).then(data=>setColorPrd(data))
    }
    // const colorFilter = brandPrd.filter((colorfilter) => {
    //   return colorfilter.color 
    // })
    // console.log(colorFilter)
    return ()=> setColorPrd([]);
  },[color]);


  // useEffect(()=>{
 
  //   // const colorFilter = brandPrd.filter((colorfilter) => {
  //   //   return colorfilter.color 
  //   // })
  //   // console.log(colorFilter)
  //   return ()=> setColorPrd([]);
  // },[brandPrd]);


  return (
    <>
    <div className="wrapper">
      <BackButton />
      <H1>{brandName}</H1>
      <PrdList>
        {color !== '' && colorPrd.products !== undefined ?
         (colorPrd.products.map((color,idx)=>(
            <Product key={idx} {...color} />
          ))
          ):(
            brandPrd.products !== undefined && 
            brandPrd.products.map((product, idx) => (
            <Product key={idx} {...product} />
            ))
          )
        }
      </PrdList>
      </div>
      <Colors />
    </>
  );
}

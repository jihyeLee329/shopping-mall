import { useRecoilState, useRecoilValue } from "recoil";
import { fetchProducts, fetchBasic, fetchBrandPrd } from "../api/Api";
import { brandAtom, brandPrdAtom, loadingAtom } from "../atoms";
import styled from "styled-components";
import Product from "../components/Product";
import BackButton from '../components/BackButton'
import { useEffect, useState } from "react";

const PrdList = styled.div`
  display: flex;
  justify-content: start;
  max-width: 1250px;
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
  // const { isLoading :loading, data:brandPrdList } = useQuery("brandPrd", fetchBrandPrd(brandName));
  const [loading, setLoading] = useRecoilState(loadingAtom);
  const [brandPrd, setBrandPrd] = useRecoilState(brandPrdAtom);

  useEffect(()=>{
    if(brandName == ''){
      fetchProducts().then(data => setBrandPrd(data))
    }else{
      fetchBrandPrd(brandName).then(data=>setBrandPrd(data))
    }
    setLoading(false);
    return ()=> setBrandPrd([]);
  },[]);
  console.log(brandPrd.products)

  return (
    <>
      <BackButton />
      <H1>{brandName}</H1>
      <PrdList>
        {brandPrd.products !== undefined && brandPrd.products.map((product, idx) => (
          <Product key={idx} {...product} />
        ))}
      </PrdList>
    </>
  );
}

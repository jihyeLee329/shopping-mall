import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import {brandAtom} from '../atoms'
import { fetchBrands } from "../api/Api";
import { useRecoilState } from "recoil";
import styled from 'styled-components'

const H1 = styled.h1`
    font-size:40px; 
    font-wieght:bold; 
    margin:30px 0;
`
const BrandList = styled.li`
 border-radius:2px; 
 background:#e5e8eb;
 color:#4e5968;
 padding: 5px; 
 margin: 5px;
 display:inline-block;
`

export default function Brands() {
  const { isLoading, data: brands } = useQuery("products", fetchBrands);
  const [brandName,setBrandName] = useRecoilState(brandAtom);
//   const [brandGet, brandSet] = useRecoilState(brandSelector)  
  function brandClick(e){
    setBrandName(e.target.textContent);
  }
  return (
    <>
      <H1>Brands List</H1>
      {!isLoading && (
        <ul>
          {brands.data.map((brand, idx) => (
            <BrandList key={idx} onClick={brandClick}>
              <Link to="/products">{brand.name}</Link>
            </BrandList>
          ))}
        </ul>
      )}
    </>
  );
}

import { useEffect, useState } from "react";
import styled from "styled-components";

const PrdItem = styled.div`

  width: calc(25% - 20px); margin:30px 10px;
  .imgBox {
    position: relative;
    overflow: hidden;
    >img{  position: absolute;
      width: 100%;
      height: 100%;
      transition: all .2s;
      &:hover{
        transform:scale(1.1, 1.1);
      }
    }
    
    &:after{ content: "";  display: block;
    padding-top: 100%;}  
  }
   
  .brandName {
    font-size: 12px;
    color: #6b7684;
  }
  p, .prdPrice{margin-top: 10px;}
  .prdName {
    font-weight: bold;
    font-size: 14px;
    color: #000;
  }
  .prdPrice {
    display: flex;
    flex-wrap:wrap;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #000;
  }
  .prdOriginPrice{display:block; width:100%; margin-bottom:5px; color:#b0b8c1; font-size:14px; text-decoration:line-through}
  .prdOriginPrice:after, .prdSalesPrice:after{content:"원"}
  .prdDiscountPrice {
    color: #f44336;
    margin-right: 10px;
    &:after{content:"%"}
  }
}

`;

export default function Product(product) {
  const [discount, setDiscount] =useState(0);
  const originPrice = product.original_price;
  const salesPrice = product.sales_price;
  function comma(price){
    return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") 
  }

  function discountRate(){
    setDiscount((100-(salesPrice*100/originPrice)).toFixed(0));
  }
  useEffect(()=>{
    discountRate();
  },[]);

  return (
    <PrdItem>
      <div className="imgBox">
        <img src={product.image} alt={product.name} />
      </div>
      <p className="brandName">{product.brand}</p>
      <p className="prdName">{product.name}</p>
      <div className="prdPrice">
        {/* {product.original_price !==product.sales_price && <span className="prdOriginPrice">{comma(product.original_price)}</span>} */}
        {discount > 0 && <span className="prdDiscountPrice">{discount}</span>}
        <span className="prdSalesPrice">{comma(product.sales_price)}</span>
      </div>
    </PrdItem>
  );
}

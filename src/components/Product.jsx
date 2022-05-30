import styled from "styled-components";

const PrdItem = styled.div`
  display: flex;
  align-items: start;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  .imgBox {
    position: relative;
    overflow: hidden;
    >img{  position: absolute;
      width: 100%;
      height: 100%;
      transition: all .2s;
    }
  &:after{ content: "";
  display: block;
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
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #000;
    &:after{content:"원"}
  }
  .prdDiscountPrice {
    color: #f44336;
    margin-right: 10px;
    &:after{content:"&"}
  }

}

`;

export default function Product(product) {
  return (
    <PrdItem>
      <div class="imgBox">
        <img src={product.img} alt={product.name} />
      </div>
      <p class="brandName">{product.brand}</p>
      <p class="prdName">{product.name}</p>
      <div class="prdPrice">
        <span class="prdDiscountPrice"></span>
        <span class="prdOriginPrice"></span>
      </div>
    </PrdItem>
  );
}

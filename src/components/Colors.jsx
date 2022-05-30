import { useQuery } from "react-query";
import { fetchColors } from "../api/Api";
import styled from 'styled-components'
import { colorsAtom } from "../atoms";
import { useRecoilState } from "recoil";
import { useState } from "react";

const ColorWrap = styled.div`
  position:absolute; 
  right:50px; 
  top:150px; 
  min-width:90px;
  font-size:13px; 
  z-index:10;
  h2{
    cursor:pointer;
    font-weight:bold; 
    margin:3px 0;
    display:inline-block;}

   > button{
     display:block;
     cursor:pointer;
    line-height:15px; padding:2px 0;
    }
   
`;


export default function Colors (){
  const { isLoading, data :colorsChip } = useQuery("colors", fetchColors);
  const [showColor, setShowColor] = useState(true);
  const [colors, setColors] = useRecoilState(colorsAtom);

  function colorSelect (e){
    setColors(e.target.innerText);
  }

  function showColorBtn(){
    setShowColor(!showColor)
  }
  // console.log(colors, 'colors컴포넌트' )
  return(
    <>
      
      <ColorWrap>
        <h2 onClick={showColorBtn}>COLORS &#709;</h2>
        {showColor ?
          (!isLoading &&
          colorsChip.data.map((color)=>(
            <button key={color.name} onClick={colorSelect}>{color.name}</button>
          ))
          ):null
        }
      </ColorWrap> 
    </>
  )
}
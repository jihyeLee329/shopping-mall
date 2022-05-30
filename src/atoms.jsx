import { atom, selector } from "recoil";

export const brandAtom = atom({
    key:'brand',
    default :''
})

// export const brandSelector = selector({
//     key:'brands',
//     get:({get}) =>{
//         const brand_name = get(brandAtom);
//         return brand_name;
//     },
//     // atom 수정하는걸 도와줌, 원하는 state 가 어떤것이든지 그걸로 수정해줌
//     set:({set}, newValue) =>{
//         const brand_name = newValue;
//         set(brandAtom, brand_name) //수정하고 싶은 recoil atom , 새로운 값 
//         // set(minuteState, 10)
//     }
// })
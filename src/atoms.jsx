import { atom, selector } from "recoil";

export const loadingAtom = atom({
    key:'loading',
    default : true,
})

export const brandAtom = atom({
    key:'brand',
    default :''
})

export const brandPrdAtom = atom({
    key:'branPrd',
    default:[],
})

export const colorsAtom = atom({
    key:'colors',
    default:'',
})


export const categoriesAtom = atom({
    key:'categories',
    default:[],
})
export const parentCateAtom = atom({
    key:'parentCategories',
    default:[],
})
export const categoryNameAtom = atom({
    key:'categoryName',
    default:'',
})
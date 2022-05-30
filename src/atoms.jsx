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


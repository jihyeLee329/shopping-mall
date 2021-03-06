import { Route, Routes } from "react-router";
import Products from "../pages/Products";
import Brands from "../pages/Brands";
import Category from '../pages/Category'

export default function Pages (){
    return (
        <Routes>
            <Route path="/" element={<Brands/ >} />
            <Route path="/products" element={<Products/ >} />
            <Route path="/categories" element={<Category />} /> 
        </Routes>
    )
}
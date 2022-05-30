import { Route, Routes } from "react-router";
import Products from "../pages/Products";
import Brands from "./Brands";

export default function Pages (){
    return (
        <Routes>
            <Route path="/" element={<Brands/ >} />
            <Route path="/products" element={<Products/ >} />
        </Routes>
    )
}
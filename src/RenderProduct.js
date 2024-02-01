import Product from "./Product";
import { useState, useEffect } from "react";

export default function RenderProduct({current}){
    const [id, setId] = useState(null);
    const [thumb, setThumb] = useState(null);
    const [tit, setTit] = useState(null);
    const [desc, setDesc] = useState(null);
    const apiLink = `https://dummyjson.com/products?limit=10&skip=${current}`
    useEffect(() => {
        fetch(apiLink)
        .then((res) => res.json())
        .then((res) => {
            setId(res.products[0].id)
            setThumb(res.products[0].thumbnail)
            setTit(res.products[0].title)
            setDesc(res.products[0].description)
            console.log(current)
        })
    },[])

 return <>
         <Product 
         id={id} 
         title = {tit} 
         thumbnail = {thumb} 
         description = {desc} />
         </>
}

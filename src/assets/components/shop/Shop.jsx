import { useState, useEffect } from "react"

async function getResult(){
    const res = await fetch('https://fakestoreapi.com/products?limit=20');
    const result = await res.json();
    console.log(result);
    return result;
}

export default function Shop(){
    const [result,setResult] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await getResult();
            setResult(res);
        }
        fetchData();
    },[]);
}
import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
    const [data, setData] = useState<any>([])
    
    useEffect(() => {
        axios.get("http://localhost:5001/api/products").then((res:any) => {
             setData(res)
        })
       
    }, [])
    console.log(data)
    return (
        <div>
            <div>
                <h1>Product list</h1>
                {
                   
                    data?.data?.map((obj: any, index:number) => (
                        <div key={index} style={{border:"1px solid red"}}>
                            <p>{obj.name}</p>
                            <p>{obj.price}</p>
                            </div>
                        ))
                       
                }
            </div>
        </div>
    )
}
export default Products;
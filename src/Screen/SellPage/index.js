import { useState } from "react";
import { SellProduct } from "../../Config/Firebase";

function SellPage() {
    const [name , setName] = useState();
    const [price , setPrice] = useState();
    const [description , setDescription] = useState();
    const [quantity , setQuantity] = useState();
    const [image, setImage] = useState();

    const handlePostBtn = ()=>{
        SellProduct({name, price, description, quantity, image})
    }

    return (
        <div>
            <h1>Post Ad</h1>
            <input placeholder="Product name" onChange={(e)=>setName(e.target.value)} /><br />
            <input placeholder="Price" onChange={(e)=>setPrice(e.target.value)} /><br />
            <input placeholder="Descrisption" onChange={(e)=>setDescription(e.target.value)} /><br />
            <input placeholder="Quantity" onChange={(e)=>setQuantity(e.target.value)} /><br />

            <input type="file" onChange={(e)=>setImage(e.target.files[0])} /><br/>

            <button onClick={handlePostBtn} >Post Ad</button>
        </div>
    )
}

export default SellPage;
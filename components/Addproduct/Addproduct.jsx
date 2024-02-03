import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Addproduct() {
    const navigate = useNavigate();
    const [file, setfile] = useState();
    const [subimg1, setsubimg1] = useState();
    const [subimg2, setsubimg2] = useState();
    const [subimg3, setsubimg3] = useState();
    const [subimg4, setsubimg4] = useState();

    const [data, setData] = useState({
        productname: "",
        title: "",
        type: "",
        size: "",
        location: "",
        brand: "",
        desc: "",
        price: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const uplode = (e) => {
        e.preventDefault();
        const productData = {
            productname: data.productname,
            title: data.title,
            type: data.type,
            size: data.size,
            location: data.location,
            brand: data.brand,
            desc: data.desc,
            price: data.price,
        };
        const formData = new FormData();
        formData.append('file', file);
        formData.append('subimg1', subimg1);
        formData.append('subimg2', subimg2);
        formData.append('subimg3', subimg3);
        formData.append('subimg4', subimg4);
        formData.append('productname', productData.productname);
        formData.append('title', productData.title);
        formData.append('type', productData.type);
        formData.append('size', productData.size);
        formData.append('location', productData.location);
        formData.append('brand', productData.brand);
        formData.append('desc', productData.desc);
        formData.append('price', productData.price);
        axios.post('https://foodapp-api-nine.vercel.app/products',formData)
            .then((Response) => {
                if (Response.data == "1") {
                    navigate('/');
                }
            })
    }
    return (
        <>
            <div className="background">
                <div className="shape" />
                <div className="shape" />
            </div>


            <label htmlFor="images">Images</label>
            <input type="file" onChange={(e) => setfile(e.target.files[0])} />
            <label htmlFor="subimg1">subimg1</label>
            <input type="file" onChange={(e) => setsubimg1(e.target.files[0])} />
            <label htmlFor="subimg2">subimg2</label>
            <input type="file" onChange={(e) => setsubimg2(e.target.files[0])} />
            <label htmlFor="subimg3">subimg3</label>
            <input type="file" onChange={(e) => setsubimg3(e.target.files[0])} />
            <label htmlFor="subimg4">subimg4</label>
            <input type="file" onChange={(e) => setsubimg4(e.target.files[0])} />
            <label htmlFor="productname">productname</label>
            <input type="text" value={DataTransferItem.title} name="productname"onChange={handleChange} />
            <label htmlFor="title">title</label>
            <input type="text" value={DataTransferItem.title} name="title"onChange={handleChange} />
            <label htmlFor="type">type</label>
            <input type="text" value={DataTransferItem.title} name="type"onChange={handleChange} />
            <label htmlFor="size">size</label>
            <input type="text" value={DataTransferItem.title} name="size"onChange={handleChange} />
            <label htmlFor="location">location</label>
            <input type="text" value={DataTransferItem.title} name="location"onChange={handleChange} />
            <label htmlFor="brand">brand</label>
            <input type="text" value={DataTransferItem.title} name="brand"onChange={handleChange} />
            <label htmlFor="desc">desc</label>
            <input type="text" value={data.desc} name="desc" onChange={handleChange} />
            <label htmlFor="price">price</label>
            <input type="text"value={data.price} name="price"onChange={handleChange}/>
            <button type='submit' onClick={uplode} >ok</button>
        
        </>
    )
}

export default Addproduct
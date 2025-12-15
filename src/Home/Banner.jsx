import React, { useState } from 'react'
import productData from "../products.json"
import SelectedCategory from '../components/SelectedCategory';

const title =(
    <h2>Search Your <span>Thousand</span> of products</h2>
)
const desc ="We Have The Thousands of collections"
const bannerList = [
 {
   iconName: "icofont-users-alt-4",
   text: "1.5 Million Customers",
 },
 {
   iconName: "icofont-notification",
   text: "More then 2000 Marchent",
 },
 {
   iconName: "icofont-globe",
   text: "Buy Anything Online",
 },
];

const Banner = () => {
    const[Searchinput , Setsearchinput]=useState("");
    const[filteredproducts ,setfilteredproducts ]=useState(productData);
    // console.log(productData)
const handlesearch = e =>{
    const searchTerm = e.target.value;
    Setsearchinput(searchTerm);

    //filtering products based on products
    const filtered =productData.filter((product)=> product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setfilteredproducts(filtered);
}

  return (
    <div className='banner-section style-4'>
        <div className='container'>
            <div className='banner-content'>
                {title}
                <form >
                    <SelectedCategory select={"all"}/>
                    <input type="text"name='Search' id='search' placeholder='Search your products...' value=
                    {Searchinput} onChange={handlesearch}/>
                    <button type='submit'>
                        <i className="icofont-search-1"></i>
                    </button>
                </form>
                <p>{desc}</p>
                <ul className='lab-ul'>
                    {
                        Searchinput && filteredproducts.map((product , i)=><li key ={i}>
                            <a href={`/shop/ ${product.id}`}>{product.name}</a>

                        </li>)
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Banner
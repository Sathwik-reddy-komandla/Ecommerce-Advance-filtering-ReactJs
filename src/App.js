import Navigation from "./Navigation/Nav";
import Products from './products/Products';
import Recommended from './Recommended/Recommended'
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import products from './db/data'
import { useState } from "react";


function App() {
  const [selectedCategory,setSelectedCategory]=useState(null)

  //-----------------Input Filter------------------------
  const [query,setQuery]=useState("")

  const handleInputChange=(e)=>{
    setQuery(e.target.value)
  }

  const filteredItems=products.filter(product=>product.title.toLowerCase().indexOf(query.toLowerCase()!==-1));

  //-----------------Radio Filter------------------------
  const handleChange=(e)=>{
    setSelectedCategory(e.target.value)
  }

  // --------------------Buttons filter--------------
  
  const handleClick=(e)=>{
    setSelectedCategory(e.target.value)
  }

  function filteredData(products,selected,query){
    console.log("filtering data in filteredData")
    let filteredProducts=products

    if(query){
      filteredProducts=filteredItems
    }

    //selected filter
    if(selected){
      filteredProducts=filteredProducts.filter(({category,color,company,newPrice,title})=>
      
        category===selected || 
        color ===selected || 
        company===selected|| 
        newPrice===selected || 
        title===selected
    
    )

    }
return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice})=>(
  <Card 
    img={img} title={title} prevPrice={prevPrice} star={star} newPrice={newPrice} reviews={reviews}
  />
  
))
  }




const result=filteredData(products,selectedCategory,query)
  return (
   <>
    <Sidebar handleChange={handleChange}/>
    <Navigation query={query} handleInputChange={handleInputChange}/>
    <Recommended handleClick={handleClick}/>
    <Products result={result}/>
   </>
  );
}

export default App;

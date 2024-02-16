import React, {useState, useEffect} from 'react'

const Products = () => {
const[products, getProducts]=useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(data=>data.json())
        .then(result=>getProducts(result));
            
    })
    
    const cards=products.map(product=>
        <div className='px-10 py-10'>
            <div className="card w-[20rem] bg-base-100 shadow-xl h-[30rem] ">
              
                <figure className='bg-fixed'><img src={product.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.title}</h2>
                    
                    <h2 className="card-title">${product.price}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )

  return (
    <>
    <div className='pt-[10rem] grid grid-cols-4 '>
        {cards}
    </div>
    </>
  )
}

export default Products
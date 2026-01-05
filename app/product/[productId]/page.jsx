"use client"
import React from 'react'
import ProductDetailsComponent from '../../../components/ProductDetails';
import ProductRow from "@/components/ProductRow";


const ProductDetails = () => {
  return (
   <>
   <section className='py-10 bg-white'>
    <div className='container mb-5'>
     <ProductDetailsComponent/>
    </div>

    <ProductRow title="Related Products"/>
    
   </section>
   </>
  )
}

export default ProductDetails;
import React from 'react'
import Link from 'next/link'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import ProductSlider from './ProductSlider'

const ProductRow = (props) => {
  return (
   <>

     <section className='bg-white py-3'>
       <div className='container'>
         <div className="flex items-center justify-between mb-5">
           <h2 className="text-[20px] text-gray-800 font-medium ">{props?.title}</h2>
           <Link href={"/"} className='flex items-center gap-1 text-[15px] text-gray-700 font-medium hover:text-primary'>
           View All <MdOutlineArrowRightAlt size={25} />
   
           </Link>
             
         </div>
         <ProductSlider/>
   
       </div>
   
     </section>
   </>
  )
}

export default ProductRow;
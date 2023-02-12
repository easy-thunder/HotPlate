import React from "react"
import{motion} from 'framer-motion';


function Menu({menuItem}){
    return(
    <motion.div
    initial="hidden" 
    whileInView={'show'}
    viewport={{ once:false, amount:0.1}}
    className='container mx-auto flex flex-col items-center text-center' 
    >
        <h3 className="text-white">{menuItem.name}</h3>

        <h3 className='text-black/70 capitalize mb-8 font-Josefin Sans' > {menuItem.description} </h3>

        <h3 className='my-1 text-[20px] lg:text-[30px] lg:my-6 text-accent font-semibold'>${menuItem.price}.00</h3>


        <motion.button 
        whileHover={ {scale:1.1} }
        whileTap={ {scale:0.9} }
        className='btn capitalize w-full lg:max-w-[240px] '
        >add too order</motion.button>

    </motion.div>

    )
}

export default Menu
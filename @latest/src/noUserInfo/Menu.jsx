import React from "react"
import{motion} from 'framer-motion';
import MenuImg1 from '../assets/img/menu/1.png'
import MenuImg2 from '../assets/img/menu/2.png'
import MenuImg3 from '../assets/img/menu/3.png'
import MenuImg4 from '../assets/img/menu/4.png'

function Menu({menuItem, key ,index}){
 const imageList = [MenuImg1, MenuImg2, MenuImg3, MenuImg4]

    return(
    <motion.div
    initial="hidden" 
    whileInView={'show'}
    viewport={{ once:false, amount:0.1}}
    className='container mx-auto flex flex-col items-center text-center' 
    >
        <h3 className="text-white">{menuItem.name}</h3>

        <h3 className='my-1 text-[20px] lg:text-[30px] lg:my-6 text-accent font-semibold'>${menuItem.price}.00</h3>

        <img src = {imageList[index]} width = "270px"  />

        <h3 className='text-black/70 capitalize mb-8 font-Josefin Sans  Itemwidth '> {menuItem.description} </h3>

        <motion.button 
        whileHover={ {scale:1.1} }
        whileTap={ {scale:0.9} }
        className='btn capitalize w-full lg:max-w-[240px] '
        >add too order</motion.button>

    </motion.div>

    )
}

export default Menu
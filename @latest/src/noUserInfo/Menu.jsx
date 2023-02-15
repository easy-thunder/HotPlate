import React from "react"
import{motion} from 'framer-motion';
import MenuImg1 from '../assets/img/menu/1.png'
import MenuImg2 from '../assets/img/menu/2.png'
import MenuImg3 from '../assets/img/menu/3.png'
import MenuImg4 from '../assets/img/menu/4.png'
import{fadeIn,staggerContainer} from '../variants';


function Menu({menuItem, index , addToCart}){
 const imageList = [MenuImg1, MenuImg2, MenuImg3, MenuImg4]

 function handleCart(){
   addToCart(menuItem)
 }

    return(
<>
    <motion.div
    initial="hidden" 
    whileInView={'show'}
    viewport={{ once:false, amount:0.1}}
    className='.container .mx-auto flex flex-col items-center text-center' 
    >
        <motion.h3 
        variants={fadeIn('down','tween', 0.2, 1.6)}
        className="text-white">{menuItem.name}</motion.h3>

        <motion.h3 
        variants={fadeIn('down','tween', 0.4, 1.6)}
        className='my-1 text-[20px] lg:text-[30px] lg:my-6 text-accent font-semibold'>${menuItem.price}.00</motion.h3>
        
        
        <img src = {imageList[index]} width = "270px"  />

        <motion.h3 
         variants={fadeIn('down','tween', 0.5, 1.6)}
        className='.container.mx-auto text-black/70 capitalize mb-8 font-Josefin Sans Itemwidth '> {menuItem.description} </motion.h3>



        <motion.button 
        whileHover={ {scale:1.1} }
        whileTap={ {scale:0.9} }
        className = 'button '
        onClick={handleCart}
        >add too order</motion.button>

    </motion.div>

    </>
    )
    
}

export default Menu
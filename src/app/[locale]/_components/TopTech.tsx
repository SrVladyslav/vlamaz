import React from 'react'
import { LazyMotion, domAnimation, m as motion} from 'framer-motion'

const TopTech =()=>{
    return <div className='absolute bottom-1/4 left-1/2 z-[5]'>
        <LazyMotion features={domAnimation}>
            <motion.div 
                initial={{opacity: 0, y:15}}
                whileInView={{opacity: 1, y:0}}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut"}}
                className='relative p-10 md:p-10 py-10
                    flex flex-col items-center justify-start
                    gap-10 text-center tracking-wider
                '
            >
                hola
            </motion.div >
        </LazyMotion>
    </div>
}

export default TopTech
import React from 'react'
import {motion} from 'framer-motion'

function FadeInWrapper({children, ...props}) {
    return (
        <motion.div 
            {...props}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ ease: "easeIn", duration: 1 }}
        >
            {children}
        </motion.div>
    )
}

export default FadeInWrapper

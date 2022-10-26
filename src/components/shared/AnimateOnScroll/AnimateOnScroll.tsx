import { ReactNode } from "react";
import { motion } from "framer-motion";

const getVariants = (type: 'fadeInLeft' | 'fadeInRight' | 'fadeInBottom' | undefined) => {
  return {
    offscreen: {
      opacity: !!type ? 0 : 1,
      position: 'relative',
      left: type == 'fadeInLeft' ? '-200px' : type == 'fadeInRight' ? '200px' : '0px',
      bottom: type == 'fadeInBottom' ? '-200px' : '0px'
    },
    onscreen: {
      opacity: 1,
      position: 'relative',
      left: '0px',
      bottom: '0px',
      transition: {
        duration: 0.5
      }
    }
  }
}


export default function(
  { children,
    className,
    animate
  }: { 
    children: ReactNode,
    className?: string,
    animate?: 'fadeInLeft' | 'fadeInRight' | 'fadeInBottom' | undefined
  }) {

  const variants = getVariants(animate)

  return (
    <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={variants as any}
        className={className}
      >
      { children }
    </motion.div>
  )
}
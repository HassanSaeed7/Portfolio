import { motion, AnimatePresence } from 'framer-motion'
import styles from '../styles/Layout.module.css'

const variants = {
    hidden: {
        x: '-100vw',
        opacity: 0
      },
      visible: {
        x: 0,
        opacity: 1,
        
      },
      exit: { opacity: 0, x: '100vw' }
}

const Layout = ({children}) => {
  return (
   
<motion.main className={styles.main} variants={variants} initial='hidden' animate='visible' exit='exit' transition={{ type: 'spring', duration: 0.7 }}>
            { children }
</motion.main>

  )
}

export default Layout



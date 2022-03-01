import Link from "next/link";
import {AnimateSharedLayout} from 'framer-motion';
import NavStyles from "../styles/Nav.module.css"


const Nav = () => {
  return (
    <AnimateSharedLayout>
    <nav className={NavStyles.nav}>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/about">About</Link></li>
            
        </ul>
    </nav>
    </AnimateSharedLayout>
  )
}

export default Nav
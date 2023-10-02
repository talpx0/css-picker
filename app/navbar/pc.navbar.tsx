'use client'
import {BsWindowSidebar,  BsFullscreen, BsLayoutSidebar} from "react-icons/bs"
import { Collapsedprops, ExpandedProps } from "./pc.navbar.prop"
import Link from "next/link"
import styles from "./pc.navbar.module.css"
import { useNavbar } from "../context/navbarContext"

export const GlobalBar =()=> {
    const { state, dispatch } = useNavbar();
    const handleClick =()=>{
        dispatch({ type: 'NEXT' });
    }
    return(<>
            <nav className={styles.globalButton}>
                <div onClick={handleClick}>
                    {state.navbarState === "hidden" && <BsWindowSidebar />}
                    {state.navbarState === "expanded" && <BsLayoutSidebar /> }
                    {state.navbarState === "collapsed" && <BsFullscreen />}
                </div>
            </nav>
            { state.navbarState === "expanded" && <ExpandedNavbar/>}  
            { (state.navbarState === "collapsed" || state.navbarState ===  "expanded") && <CollapsedNavBar /> }    
            </>
    )
}

export const CollapsedNavBar =()=> {
    const {rootPathName} = useNavbar()
    return(
        <nav className={styles.collapsedNav}>
            <nav>
                {Collapsedprops.map((item) => 
                    <Link href={item.link} key={item.id} >               
                        {rootPathName === item.link ? item.activeIcon : item.icon}
                    </Link>
                )} 
            </nav>
            <nav>
            </nav>
        </nav>
    )
}

export const ExpandedNavbar =()=> {
    return(
        <nav className={styles.expandedNavbar}>
            <Link href="/" className={styles.webName}>T A L P X</Link>
            {ExpandedProps.map((item)=> <Link href={item.link} key={item.id} className={styles.hoverLink}>
                {item.name}
                <div className={styles.bar}></div>
                </Link>
            )}
        </nav>
    )
}


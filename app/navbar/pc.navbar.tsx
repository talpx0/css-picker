'use client'
import {BsWindowSidebar,  BsFullscreen, BsLayoutSidebar} from "react-icons/bs"
import { Collapsedprops, ExpandedProps } from "./pc.navbar.prop"
import Link from "next/link"
import styles from "./pc.navbar.module.css"
import { useNavbar } from "../context/navbarContext"
import {BsBrightnessHigh, BsMoon, BsSearch} from 'react-icons/bs'
import {IoLanguageSharp} from 'react-icons/io5'
import { useTheme } from "../context/themeContext"

export const GlobalBar =()=> {
    const { state, dispatch } = useNavbar();
    const handleClick =()=>{
        dispatch({ type: 'NEXT' });
    }
    return(<>
            <nav className={styles.globalButton} onClick={handleClick} >
                        {state.navbarState === "hidden" && <div className={styles[`${state.navbarState}Button`]}>
                            <BsWindowSidebar />
                        </div>}
                        {state.navbarState === "expanded" && <div className={styles[`${state.navbarState}Button`]}>
                            <BsLayoutSidebar />
                        </div>}
                        {state.navbarState === "collapsed" && <div className={styles[`${state.navbarState}Button`]}>
                            <BsFullscreen />
                        </div>}
            </nav>
            { state.navbarState === "expanded" && <ExpandedNavbar/>}  
            { (state.navbarState === "collapsed" || state.navbarState ===  "expanded") && <CollapsedNavBar /> }    
            </>
    )
}

export const CollapsedNavBar =()=> {
    const {rootPathName, state} = useNavbar()
    return(
        <nav className={`${styles[state.navbarState]} ${styles.collapsedNav}`}>
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
    const {toggleTheme, isDarkMode} = useTheme()
    return(
        <nav className={styles.expandedNavbar}>
            <nav>
                <Link href="/" className={styles.webName}>T A L P X</Link>
                {ExpandedProps.map((item)=> <Link href={item.link} key={item.id} className={styles.hoverLink}>
                    {item.name}
                    <div className={styles.bar}></div>
                    </Link>
                )}
            </nav>
            <nav>
                <button><BsSearch /></button>
                <button onClick={toggleTheme}>{isDarkMode ?  <BsBrightnessHigh /> : <BsMoon />  }</button>
                <button><IoLanguageSharp /></button>
            </nav>
        </nav>
    )
}


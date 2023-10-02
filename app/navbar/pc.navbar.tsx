'use client'
import {BsWindowSidebar,  BsFullscreen, BsLayoutSidebar} from "react-icons/bs"
import { Collapsedprops, CssBarProps, ExpandedProps } from "./pc.navbar.prop"
import { usePathname } from "next/navigation"
import Link from "next/link"
import styles from "./pc.navbar.module.css"
import { useNavbar } from "../context/navbarContext"
import { SidebarProps } from "./pc.navbar.prop"
import { ReactNode } from "react"


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
    const pathName = usePathname()
    const rootPath = '/' + pathName.split('/')[1];
    return(
        <nav className={styles.collapsedNav}>
            <nav>
                {Collapsedprops.map((item) => 
                    <Link href={item.link} key={item.id} >               
                        {rootPath === item.link ? item.activeIcon : item.icon}
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


export const BodyWarpper =({children, props}:{children: ReactNode, props: SidebarProps[]})=>{
    const {state} = useNavbar()
    return(
        <section className={styles.bodyWrapper}>
            {(state.navbarState === "collapsed" || state.navbarState ===  "expanded") && <CollapsedSidebar props={props}/>}
            {children}
        </section>
    )
}


export const CollapsedSidebar =({props}:{props: SidebarProps[]})=> {
    const pathName = usePathname()
    return( 
        <aside className={styles.sidebar}>
            {props.map((item)=> <Link 
                href={item.link!} 
                key={item.id}
                className={styles[pathName === item.link ? 'invertIcon': 'icon']}>
                    <div>{item.icon}</div>
                    <div>{item.name}</div>
                </Link>
            )}
        </aside>
    )
}
'use client'
import { useReducer, Reducer, useEffect, useState  } from "react"
import {BsWindowSidebar,  BsFullscreen, BsLayoutSidebar} from "react-icons/bs"
import { Collapsedprops, SidebarProps } from "./pc.navbar.prop"
import { usePathname } from "next/navigation"
import Link from "next/link"
import styles from "./pc.navbar.module.css"

// Expanded: Icon + Description visible
// Collapsed: Only Icon visible
// Hidden: Neither Icon nor Description visible
type BarState = "expanded"|"collapsed"|"hidden"

type BarAction<T extends string = string > = {
    type: T 
}

type NavbarState = {
    navbarState: BarState
    sidebarState: BarState
    isCorlorBar: boolean
    next: () => NavbarState
}

const Expanded: NavbarState = {
    navbarState: "expanded",
    sidebarState: "expanded",
    isCorlorBar: true,
    next: () => ({ ...Collapsed}) 
}


const FullScreen: NavbarState = {
    navbarState: "hidden",
    sidebarState: "hidden",
    isCorlorBar: false,
    next: () => ({...Expanded})
} 

const Collapsed: NavbarState = {
    navbarState: "collapsed",
    sidebarState: "collapsed",
    isCorlorBar: false,
    next: () => ({ ...FullScreen}) 
}


const reducer: Reducer<NavbarState, BarAction> = (state: NavbarState, action: BarAction): NavbarState=> {
    switch (action.type) {
        case 'NEXT': {
          return state.next()
        }
    }
    throw Error('Unknown action: ' + action.type);
}

// const initialState:NavbarState = JSON.parse(localStorage.getItem("navBarState") as string) || Expanded

export const GlobalBar =()=> {
    const [state, dispatch] = useReducer(reducer, Expanded)
    const pathName = usePathname()
    const [isActive, setIsActive] = useState<number>(null!)
    /*useEffect(() => {
        localStorage.setItem("navBarState", JSON.stringify(state))
    }, [state]) */
    useEffect(() => {
        Collapsedprops.forEach(item => {
            if (pathName === item.link) {
                setIsActive(item.id)
            }
        })
    }, [pathName])
    const handleClick =()=>{
        dispatch({ type: 'NEXT' });
    }
    return(<main>
            <nav className={styles.globalNavbar}>
                    <nav className={styles.globalButton}>
                        <div onClick={handleClick}>
                           {state.navbarState === "hidden" && <BsWindowSidebar />}
                           {state.navbarState === "expanded" && <BsLayoutSidebar /> }
                           {state.navbarState === "collapsed" && <BsFullscreen />}
                        </div>
                    </nav>
                    {state.navbarState === "collapsed" && <CollapsedNavbar isActive={isActive} />}
                    {state.navbarState === "expanded" &&  <ExpandedNavbar />}
            </nav>
            { state.sidebarState === "expanded" && <ExpandedSidebar />  }
            { state.sidebarState === "collapsed"&& <CollapsedSidebar />}            
        </main>
    )
}

export const ExpandedNavbar =()=> {
    return(
        <nav className={styles.expandedNavbar} ></nav>
    )
}


export const ExpandedSidebar =()=> {
    return(
        <CollapsedSidebar />
    )
}


export const CollapsedNavbar =({isActive}:{isActive: number})=> {
    return(
        <nav className={styles.collapsedNav}>
            <header>
                {Collapsedprops.map((item)=> <Link href={item.link} key={item.id} >               
                        {isActive === item.id ? item.activeIcon : item.icon}
                </Link>)}
            </header>
        </nav>
    )
}


export const  CollapsedSidebar =()=> {
    return( 
            <aside className={styles.sidebar}>
                {SidebarProps.map((item)=> <section key={item.id}>
                        <div>{item.icon}</div>
                        <div>{item.name}</div>
                    </section>
                )}
            </aside>
    )
}
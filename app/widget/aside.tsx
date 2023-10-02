'use client'
import styles from "./aside.module.css"
import { useNavbar } from "../context/navbarContext"
import { ReactElement, ReactNode } from "react"
import Link from "next/link"
import { CssBarProps,ReactBarProps, NodeJSBarProps, TypeScriptBarProps} from "./aside.prop"
export type SidebarProps = {
    icon: ReactElement
    name: string
    id: number
    link?:string
    component?: ReactElement
}
export const BodyWarpper =({children}:{children: ReactNode})=>{
    const {state, rootPathName} = useNavbar()
    return(
        <section className={styles.bodyWrapper}>
            {(state.navbarState === "collapsed" || state.navbarState === "expanded") && 
                <>
                {rootPathName === "/css" && <CollapsedSidebar props={CssBarProps} />}
                {rootPathName === "/react" && <CollapsedSidebar props={ReactBarProps} />}
                {rootPathName === "/typescript" && <CollapsedSidebar props={TypeScriptBarProps} />}
                {rootPathName === "/nodejs" && <CollapsedSidebar props={NodeJSBarProps} />}
                </>
            }
            <section className={styles.mainBody}>
                {children}
            </section>
        </section>
    )
}

export const CollapsedSidebar =({props}:{props: SidebarProps[]})=> {
    const {pathName} = useNavbar()
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
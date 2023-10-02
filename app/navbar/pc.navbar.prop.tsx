import {ReactElement} from 'react'
import { WTypeScript, WCSS, WNodeJS, WReactJS } from '@/public/svg/whiteIcon'
import { BTypeScript, BCSS, BNodeJS,  } from '@/public/svg/whiteIcon'
import {SiPreact as BReactJS} from "react-icons/si"
import { Animation, Responsive } from '@/public/svg/sidebar'
import {RxShadow} from "react-icons/rx"
import {IoColorPaletteOutline} from "react-icons/io5"
import {GiComputing} from "react-icons/gi"
type Collapsedprop = {
    icon: ReactElement
    activeIcon: ReactElement
    link: string
    id: number
}

export type SidebarProps = {
    icon: ReactElement
    name: string
    id: number
    link?:string
    component?: ReactElement
}

type ExpandProps = {
    id: number;
    name: string;
    link: string;
}


export const CssBarProps:SidebarProps[] = [
    {
        icon: <RxShadow />,
        name: "BoxShadow",
        link: "/css/boxshadow",
        id: 1
    },
    {
        icon: <IoColorPaletteOutline />,
        name: "Color Picker",
        link: "/css/colorpicker",
        id: 2,
    },
    {
        icon: <GiComputing />,
        name: "Generator",
        link: "/css/generator",
        id: 3,
    },
    {
        icon: <Animation />,
        name:"Animation",
        link: "/css/animation",
        id: 4,
    },
    {
        icon: <Responsive />,
        name: "Responsive",
        link: "/css/responsive",
        id: 5,
    },
]

const ReactBarProps:SidebarProps[] = [
]

const NodeJSBarProps:SidebarProps[] = [
]

const TypeScriptBarProps:SidebarProps[] = []


export const Collapsedprops:Collapsedprop[] = [
    {
        icon: <WCSS />,
        activeIcon: <BCSS />,
        link: "/css",
        id: 1
    },
    {
        icon: <WReactJS />,
        activeIcon: <BReactJS />,
        link: "/react",
        id: 2
    },
    {
        icon:<WTypeScript />,
        activeIcon: <BTypeScript />,
        link: "/typescript",
        id: 3 
    },
    {
        icon:<WNodeJS />,
        activeIcon: <BNodeJS />,
        link: "/nodejs",
        id: 4
    }
]


export const ExpandedProps: ExpandProps[] = [
    { id: 1, name: 'Documentation', link: '/documentation' },
    { id: 2, name: 'Products', link: '/products' },
    { id: 3, name: 'Forums', link: '/forums' },
    { id: 4, name: 'Widget', link: '/widget' },
    { id: 5, name: 'Tutorial', link: '/tutorial' }
]

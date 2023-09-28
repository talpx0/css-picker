import {ReactElement} from 'react'
import { WTypeScript, WCSS, WNodeJS, WReactJS } from '@/public/svg/whiteIcon'
import { BTypeScript, BCSS, BNodeJS, BReactJS } from '@/public/svg/whiteIcon'
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

type SidebarProps = {
    icon: ReactElement
    name: string
    id: number
    link?:string
    component?: ReactElement
}



export const SidebarProps:SidebarProps[] = [
    {
        icon: <RxShadow />,
        name: "BoxShadow",
        id: 1
    },
    {
        icon: <IoColorPaletteOutline />,
        name: "Color Picker",
        id: 2,
    },
    {
        icon: <GiComputing />,
        name: "Generator",
        id: 3,
    },
    {
        icon: <Animation />,
        name:"Animation",
        id: 4,
    },
    {
        icon: <Responsive />,
        name: "Responsive",
        id: 5,
    },
]

export const Collapsedprops:Collapsedprop[] = [
    {
        icon: <WCSS />,
        activeIcon: <BCSS />,
        link: "/",
        id: 1
    },
    {
        icon: <WReactJS />,
        activeIcon: <BReactJS />,
        link: "./reactPage",
        id: 2
    },
    {
        icon:<WTypeScript />,
        activeIcon: <BTypeScript />,
        link: "./typescriptPage",
        id: 3 
    },
    {
        icon:<WNodeJS />,
        activeIcon: <BNodeJS />,
        link: "./nodejsPage",
        id: 4
    }
]


export const ExpandedProp = [
    {
        
    }
]
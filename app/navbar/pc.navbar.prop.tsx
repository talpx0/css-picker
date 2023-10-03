import {ReactElement} from 'react'
import { BTypeScript, BCSS, BNodeJS,  } from '@/public/svg/whiteIcon'
import {BiLogoReact, BiLogoNodejs, } from 'react-icons/bi'
import {TbBrandTypescript, TbFileTypeCss} from 'react-icons/tb'
import {SiPreact as BReactJS} from "react-icons/si"
type Collapsedprop = {
    icon: ReactElement
    activeIcon: ReactElement
    link: string
    id: number
}

type ExpandProps = {
    id: number;
    name: string;
    link: string;
}

export const Collapsedprops:Collapsedprop[] = [
    {
        icon: <TbFileTypeCss />,
        activeIcon: <BCSS />,
        link: "/css",
        id: 1
    },
    {
        icon: <BiLogoReact />,
        activeIcon: <BReactJS />,
        link: "/react",
        id: 2
    },
    {
        icon:<TbBrandTypescript />,
        activeIcon: <BTypeScript />,
        link: "/typescript",
        id: 3 
    },
    {
        icon:<BiLogoNodejs />,
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

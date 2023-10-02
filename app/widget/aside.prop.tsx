'use client'
import { SidebarProps } from "../widget/aside"
import {RxShadow} from "react-icons/rx"
import {IoColorPaletteOutline} from "react-icons/io5"
import {GiComputing} from "react-icons/gi"
import { Animation, Responsive } from '@/public/svg/sidebar'

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

export const NodeJSBarProps:SidebarProps[] = [
]

export const ReactBarProps:SidebarProps[] = [
]

export const TypeScriptBarProps:SidebarProps[] = []
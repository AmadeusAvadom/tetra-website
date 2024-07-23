import { ReactNode } from "react"

export interface IIcon {
    width: number,
    height: number
    className?: string
}

export type SocialButtonsType = {
    name: string,
    link: string,
    component: any
}
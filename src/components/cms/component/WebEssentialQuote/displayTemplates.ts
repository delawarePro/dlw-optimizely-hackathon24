import type { LayoutProps } from "@remkoj/optimizely-cms-react/components"
import type { ReactNode } from "react"
import type quoteLayoutStyles from "./quoteLayout.opti-style.json"

export type quoteLayoutProps = LayoutProps<typeof quoteLayoutStyles>
export type quoteLayoutComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: quoteLayoutProps | undefined
} & JSX.IntrinsicElements['div']
export type quoteLayoutComponent<DT extends Record<string, any> = Record<string, any>> = (props: quoteLayoutComponentProps<DT>) => ReactNode


export type WebEssentialQuoteLayoutProps = quoteLayoutProps
export type WebEssentialQuoteComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends WebEssentialQuoteLayoutProps = WebEssentialQuoteLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type WebEssentialQuoteComponent<DT extends Record<string, any> = Record<string, any>, LP extends WebEssentialQuoteLayoutProps = WebEssentialQuoteLayoutProps> = (props: WebEssentialQuoteComponentProps<DT,LP>) => ReactNode
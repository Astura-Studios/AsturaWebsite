import type { BaseContext } from "next/dist/shared/lib/utils";
import type { ComponentType, CSSProperties, ReactNode } from "react";
import type { MetaOptions } from "../components/Meta";
import type { NextPageContext } from "next";

export type Defaults = Intersection<Required<Pick<MetaOptions, "keywords">>, {
    url: string;
    description: string;
    image: string;
    icon: string;
    "theme-color": string;
}>;

export interface IconProps {
    className?: string;
    style?: CSSProperties;
}

export type NextComponent<P = {}, IP = {}, C extends BaseContext = NextPageContext> = ComponentType<P> & {
    getInitialProps?(context: C): IP | Promise<IP>;
};

export type NextComponentWithChildren<Props = {}> = NextComponent<Props & {
    children: ReactNode;
}>;

export type NextComponentWithStyles<Props = {}> = NextComponent<Props & {
    style: CSSProperties;
}>;

export interface NextPageProps {
    name: string;
};

export type Intersection<T1, T2> = T1 & T2;
export type Union<T1, T2> = T1 | T2; 
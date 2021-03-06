import { Fragment, ReactNode } from "react";
import { Loader } from "./Loader";
import { Meta, MetaOptions } from "./Meta";
import { Navigation } from "./Navigation";
import type { NextComponentWithChildren } from "../lib/types";

export type LayoutOptions = {
    children: ReactNode;
    name: string;
    meta: MetaOptions;
};

export const Layout: NextComponentWithChildren<LayoutOptions> = (options: LayoutOptions): JSX.Element => {
    return (
        <Fragment>
            <Meta {...options} />
            <Loader />
            
            <div id="root">
                <Navigation />

                <main>
                    {options.children}
                </main>
            </div>
        </Fragment>
    );
};
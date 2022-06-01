import { Fragment, ReactNode } from "react";
import { Meta, MetaOptions } from "./layout";
import type { NextComponentWithChildren } from "../lib/types";

export type PageOptions = {
    children: ReactNode;
    name: string;
    meta: MetaOptions;
};

export const Page: NextComponentWithChildren<PageOptions> = (options: PageOptions): JSX.Element => {
    return (
        <Fragment>
            <Meta {...options} />
            
            <div>
                <main>
                    {options.children}
                </main>
            </div>
        </Fragment>
    );
};
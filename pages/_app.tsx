import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPageProps } from "../lib/types";
import { NextRouter, useRouter } from "next/router";
import { Layout } from "../components/Layout";
import { Loader } from "../lib/loader";

import metadata from "../lib/static/metadata.json";
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps<NextPageProps>) {
    const router: NextRouter = useRouter();

    // useEffect((): (() => void) => {
    //     const loader: Loader = new Loader();

    //     router.events.on("routeChangeStart", loader.start);
    //     router.events.on("routeChangeComplete", loader.stop);
    //     router.events.on("routeChangeError", loader.stop);

    //     return (): void => {
    //         router.events.off("routeChangeStart", loader.start);
    //         router.events.off("routeChangeComplete", loader.stop);
    //         router.events.off("routeChangeError", loader.stop);
    //     };
    // }, [router.events]);

    useEffect(() => {
        const loader: Loader = new Loader();
        loader.start();

        setTimeout(loader.stop, 4000);
    })

    // @ts-ignore
    return Component.defaultProps && Component.defaultProps.name && typeof metadata[Component.defaultProps?.name.toLowerCase()] !== "undefined" ? <Layout name={Component.defaultProps?.name} meta={metadata[Component.defaultProps?.name.toLowerCase()]}>
        <Component {...pageProps} />
    </Layout> : <Component {...pageProps} />;
}

export default App;
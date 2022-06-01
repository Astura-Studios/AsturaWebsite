import type { NextPage } from "next";
import { Page } from "../components/base";

import metadata from "../lib/static/metadata.json";

const Home: NextPage = (): JSX.Element => {
    return <Page name="Home" meta={metadata["home"]}>
        <p className="text-2xl">Hello, World!</p>
    </Page>;
};

export default Home;
import type { NextPage } from "next";
import { Loader } from "../components/Loader";
import type { NextPageProps } from "../lib/types";

const Home: NextPage<NextPageProps> = ({ name }: NextPageProps): JSX.Element => {
    return <>
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <h1>Redefining</h1>
        </div>
    </>
};

Home.defaultProps = {
    name: "Home"
};

export default Home;
import { Discord } from "./icons/Discord";
import type { NextComponent } from "../lib/types";

export const Navigation: NextComponent = (): JSX.Element => {
    return <div className="flex flex-row justify-evenly items-center py-5 font-sans">
        <div className="w-1/4 flex justify-center items-center">
            <div className="h-12 w-12" style={{
                backgroundImage: "url(/assets/icons/QWQkeOXYrvT9QV7iOQJpM2QbX3FHI0j2.png)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }} />
        </div>

        <ul className="flex flex-row justify-center items-center w-2/4 text-neutral-700 tracking-tight font-normal">
            <li className="px-5">Home</li>
            <li className="px-5">About Us</li>
            <li className="px-5">Tutorials</li>
            <li className="px-5">Blog</li>
            <li className="px-5">Resources</li>
        </ul>

        <ul className="flex flex-row justify-center items-center w-1/4">
            <li className="px-4">Sign In</li>
            <li className="px-4">
                <button className="flex flex-row justify-center items-center gap-x-2 bg-blurple px-4 py-3 rounded-md text-white">
                    <Discord className="fill-white h-5 w-5" />
                    Discord
                </button>
            </li>
        </ul>
    </div>;
};
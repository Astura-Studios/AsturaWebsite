import { useEffect } from "react";
import type { NextComponent } from "../lib/types";

import { animateLoader } from "../lib/utils";

export const Loader: NextComponent = (): JSX.Element => {
    useEffect(animateLoader);

    return <div className="absolute top-0 left-0 bg-white h-screen w-screen hidden justify-center items-center" id="loader">
        <svg version="1.1" viewBox="0.0 0.0 512.0 512.0" fill="none" stroke="none" strokeLinecap="square" strokeMiterlimit={10} xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="h-64 w-64 transform duration-500 ease-in-out" id="load-component-container">
            <clipPath id="p.0">
                <path d="m0 0l512.0 0l0 512.0l-512.0 0l0 -512.0z" clipRule="nonzero" />
            </clipPath>
            <g clipPath="url(#p.0)">
                <path className="transform duration-500 ease-in-out" fill="#1a1a1a" fillOpacity="0.3765" d="m191.99971 167.41153l66.01573 46.919373l0 115.253845l-66.01573 -46.919373z" fillRule="evenodd" id="load-component-1" />
                <path className="transform duration-500 ease-in-out" fill="#1a1a1a" fillOpacity="0.251" d="m125.98314 120.0l66.01575 46.919373l0 59.50583l-66.01575 -46.919373z" fillRule="evenodd" id="load-component-2" />
                <path className="transform duration-500 ease-in-out" fill="#1a1a1a" fillOpacity="0.3765" d="m233.36896 344.57324l-66.01575 -46.919373l0 -115.253876l66.01575 46.919373z" fillRule="evenodd" id="load-component-3" />
                <path className="transform duration-500 ease-in-out" fill="#1a1a1a" fillOpacity="0.2549" d="m299.38553 391.57425l-66.01575 -46.919373l0 -59.5058l66.01575 46.919373z" fillRule="evenodd" id="load-component-4" />
                <path className="transform duration-500 ease-in-out" fill="#1a1a1a" fillOpacity="0.3765" d="m323.38583 167.62413l-66.01575 46.919373l0 115.25386l66.01575 -46.919373z" fillRule="evenodd" id="load-component-5" />
                <path className="transform duration-500 ease-in-out" fill="#1a1a1a" fillOpacity="0.251" d="m389.4024 120.2126l-66.01575 46.919373l0 59.50583l66.01575 -46.919373z" fillRule="evenodd" id="load-component-6" />
                <path className="transform duration-500 ease-in-out" fill="#1a1a1a" fillOpacity="0.3765" d="m282.01657 344.78583l66.01575 -46.919373l0 -115.25386l-66.01575 46.919373z" fillRule="evenodd" id="load-component-7" />
                <path className="transform duration-500 ease-in-out" fill="#1a1a1a" fillOpacity="0.2549" d="m216.0 391.78687l66.01575 -46.919373l0 -59.50583l-66.01575 46.919373z" fillRule="evenodd" id="load-component-8" />
            </g>
        </svg>
    </div>;
};
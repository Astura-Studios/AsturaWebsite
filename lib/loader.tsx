import App from "../pages/_app";

import { Loader as L } from "../components/Loader";
import { render } from "react-dom";

export class Loader {
    public loader: HTMLElement | null;

    public constructor() {
        this.loader = document.getElementById("loader");
    }

    public start(): void {
        // @ts-ignore
        render(<L />, <App />);
        this.loader ? this.loader.style.display = "flex" : null;
    }

    public stop() {
        this.loader ? this.loader.style.display = "none" : null;
    }
}
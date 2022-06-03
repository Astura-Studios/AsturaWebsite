export class Loader {
    public loader: HTMLElement | null;

    public constructor() {
        this.loader = document.getElementById("loader");
    }

    public start(): void {
        this.loader ? this.loader.classList.replace("hidden", "flex") : null;
    }

    public stop(): void {
        this.loader ? this.loader.classList.replace("flex", "hidden") : null;
    }
}
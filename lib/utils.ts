export function animateLoader(): void {
    const executeInit = (): void => {
        (document.getElementById("load-component-1") as HTMLElement).style.transform = "translateX(-2rem) translateY(-2rem)";
        (document.getElementById("load-component-2") as HTMLElement).style.transform = "translateX(-2rem) translateY(-2rem)";
        (document.getElementById("load-component-3") as HTMLElement).style.transform = "translateX(-2rem) translateY(2rem)";
        (document.getElementById("load-component-4") as HTMLElement).style.transform = "translateX(-2rem) translateY(2rem)";

        (document.getElementById("load-component-5") as HTMLElement).style.transform = "translateX(2rem) translateY(-2rem)";
        (document.getElementById("load-component-6") as HTMLElement).style.transform = "translateX(2rem) translateY(-2rem)";
        (document.getElementById("load-component-7") as HTMLElement).style.transform = "translateX(2rem) translateY(2rem)";
        (document.getElementById("load-component-8") as HTMLElement).style.transform = "translateX(2rem) translateY(2rem)";
    };

    const executeRotate = (): void => {
        const rotateTransform: Keyframe[] = [
            { transform: "rotate(0)" },
            { transform: "rotate(360deg)" }
        ];

        const transformOptions: KeyframeAnimationOptions = {
            duration: 500,
            iterations: 1
        };

        setTimeout((): void => {
            (document.getElementById("load-component-container") as HTMLElement).animate(rotateTransform, transformOptions);
        }, 200);
    };

    setInterval((): void => {
        const init: Promise<void> = new Promise((resolve: (value: void | PromiseLike<void>) => void): void => resolve(executeInit()));

        init
            .then(executeRotate)
            .then((): void => {
                setTimeout((): void => {
                    (document.getElementById("load-component-1") as HTMLElement).style.transform = "translateX(0rem) translateY(0rem)";
                    (document.getElementById("load-component-2") as HTMLElement).style.transform = "translateX(0rem) translateY(0rem)";
                    (document.getElementById("load-component-3") as HTMLElement).style.transform = "translateX(0rem) translateY(0rem)";
                    (document.getElementById("load-component-4") as HTMLElement).style.transform = "translateX(0rem) translateY(0rem)";

                    (document.getElementById("load-component-5") as HTMLElement).style.transform = "translateX(0rem) translateY(0rem)";
                    (document.getElementById("load-component-6") as HTMLElement).style.transform = "translateX(0rem) translateY(0rem)";
                    (document.getElementById("load-component-7") as HTMLElement).style.transform = "translateX(0rem) translateY(0rem)";
                    (document.getElementById("load-component-8") as HTMLElement).style.transform = "translateX(0rem) translateY(0rem)";
                }, 600);
            })
            .then((): void => {
                setTimeout((): void => void 0, 1000);
            });
    }, 1000);
}

export function capitalize(text: string): string {
    return text.split(" ").map((word: string): string => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(" ");
}

export function imageSuffix(url: string): "png" | "jpg" | "jpeg" | "ico" | "webp" | "gif" | undefined {
    if (url.endsWith(".png")) return "png";
    if (url.endsWith(".jpg")) return "jpg";
    if (url.endsWith(".jpeg")) return "jpeg";
    if (url.endsWith(".ico")) return "ico";
    if (url.endsWith(".webp")) return "webp";
    if (url.endsWith(".gif")) return "gif";
}
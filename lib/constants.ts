import { Defaults } from "./types";

export const defaults: Defaults = {
    url: process.env.NODE_ENV === "production" ? "https://astura.xyz" : "http://localhost:3000",
    description: "No description was provided for this page.",
    keywords: ["Astura Studios", "development", "programming", "coding"],
    image: "/vercel.svg",
    icon: "/assets/icons/QWQkeOXYrvT9QV7iOQJpM2QbX3FHI0j2.png",
    "theme-color": "#ffffff"
};
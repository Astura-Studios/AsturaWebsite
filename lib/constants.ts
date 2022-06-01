import { Defaults } from "./types";

export const defaults: Defaults = {
    url: process.env.NODE_ENV === "production" ? "https://astura.xyz" : "http://localhost:3000",
    description: "No description was provided for this page.",
    keywords: ["Astura Studios", "development", "programming", "coding"],
    image: "/vercel.svg",
    icon: "/favicon.ico",
    "theme-color": "#ffffff"
};
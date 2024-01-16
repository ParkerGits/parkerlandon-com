import { Noto_Serif, Roboto, Roboto_Slab, Fira_Mono } from "next/font/google";

export const fontLogo = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-logo",
  weight: "500",
});

export const fontHeading = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500"],
});

export const fontBody = Roboto({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "700"],
});

export const fontMono = Fira_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

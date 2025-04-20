import { Noto_Serif, Fira_Mono } from "next/font/google";

export const fontLogo = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-logo",
  weight: "500",
});

export const fontHeading = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500"],
});

export const fontBody = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "700"],
});

export const fontMono = Fira_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Alexandria } from "next/font/google";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const alexandria = Alexandria({
  subsets: ["latin"],
  variable: "--font-alexandria",
  display: "swap",
});

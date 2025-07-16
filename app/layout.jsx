import { Sometype_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/MainNav";
import PageTransition from "@/components/PageTransition";
import RectangleTransition from "@/components/RectangleTransition";
import Gradient from "@/components/Gradient";
import Header from "@/components/Header";
import { icons } from "lucide-react";

const sometypeMono = Sometype_Mono({
  variable: "--font-sometypeMono",
  subsets: ["latin"],
});

export const metadata = {
  title: { template: "Sofia Khizhnyak • %s", default: "Sofia Khizhnyak" },
  icons: {
    icon: "/favicon.svg",
  },
  description:
    "Sofia Khizhnyak - Frontend Web and Mobile Developer Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sometypeMono.variable}  antialiased overflow-hidden relative`}
      >
        <Gradient />
        <RectangleTransition />
        <PageTransition>
          <div className="flex">
            <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary">
              <MainNav />
            </div>
            <div className="w-full max-w-[1130px] px-[15px] mx-auto">
              <Header />
              <div>{children}</div>
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}

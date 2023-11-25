import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/shared/Header";
import LeftSidebar from "@/components/shared/LeftSideBar";
import RightSideBar from "@/components/shared/RightSideBar";
import BottomBar from "@/components/shared/BottomBar";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex h-screen w-screen flex-col gap-5 overflow-hidden bg-blue-100 p-5 dark:bg-neutral-950 `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="flex h-full w-full gap-5">
            <LeftSidebar />
            {children}
            <RightSideBar />
          </div>
          <BottomBar />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

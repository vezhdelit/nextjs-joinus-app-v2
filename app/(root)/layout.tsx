import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/shared/Header";
import LeftSidebar from "@/components/shared/LeftSideBar";
import RightSideBar from "@/components/shared/RightSideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col h-screen w-screen bg-blue-100 p-4 gap-4`}
      >
        <Header />
        <div className="gap-4 flex w-full h-full">
          <LeftSidebar />
          {children}
          <RightSideBar />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
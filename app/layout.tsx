import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MenuBar from "@/components/ui/animatedmenu";
import { ToastContainer, toast } from "react-toastify";
import ToastProvider from "@/provider/ToastProvider";
import Navbar from "@/components/ui/Navbar";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { dbConnect } from "@/db/dbconnect.js";
import { log } from "console";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Course Manager | Department Of Anthropology",
  description: "Own Course manager of department Of Anthropology",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await dbConnect();
  const session = await auth();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          {/* <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
          <div className=" sticky top-2 mx-auto p-3">
            {/* <MenuBar /> */}
            <Navbar loginSession={session} />
          </div>
          <ToastProvider />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}

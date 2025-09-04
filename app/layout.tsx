import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/provider/ToastProvider";
import Navbar from "@/components/ui/Navbar";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { dbConnect } from "@/db/dbconnect.js";

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
          <div className="">
            {/* <MenuBar /> */}
            <Navbar loginSession={session} />
          </div>
          <ToastProvider />
          <div className="mt-20">{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}

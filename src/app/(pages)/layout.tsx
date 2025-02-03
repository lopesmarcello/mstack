import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ReactQueryProvider } from "@/common/contexts/ReactQueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SocialsDropdown } from "@/components/organisms/SocialsDropdown";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mStack",
  description: "mStack starter project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <ToastContainer autoClose={2000} closeOnClick />
          <div className="absolute top-4 left-4 ">
            <SocialsDropdown />
          </div>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}

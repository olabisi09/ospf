import Header from "@/components/header";
import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "@/store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shiffts",
  description: "Hire Medical Professionals For Free",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
        {/* <Header />
        {children} */}
      </body>
    </html>
  );
}

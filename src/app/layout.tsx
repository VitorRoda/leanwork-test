import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/navbar";
import Footerbar from "../components/layout/footerbar";
import { CartProvider } from "@/contexts/cartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leanwork test",
  description: "Test de desenvolvimento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <main className="min-h-[84vh] container mx-auto px-5 md:px-0">
            {children}
          </main>
          <Footerbar />
        </CartProvider>
      </body>
    </html>
  );
}

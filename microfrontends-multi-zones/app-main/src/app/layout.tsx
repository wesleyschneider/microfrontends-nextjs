import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App Core",
  description: "Application Core",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="bg-orange-500 text-black p-5 flex justify-between">
          <span>Micro-Frontends</span>
          <div className="flex gap-3">
            <a className="hover:underline underline-offset-8" href="/">
              Home
            </a>
            <a className="hover:underline underline-offset-8" href="/contact">
              Contact
            </a>
            <a className="hover:underline underline-offset-8" href="/login">
              Login
            </a>
          </div>
        </header>
        <main className="h-full">{children}</main>
        <footer className="bg-purple-700 text-white p-5">
          <span>Desenvolvido por Wesley</span>
        </footer>
      </body>
    </html>
  );
}

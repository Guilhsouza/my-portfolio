import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guilherme Souza | Fullstack Developer",
  icons: "./favicon/icon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={'antialiased'}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "Ayra",
  description:
    "Ayra is a platform for creating and sharing AI-powered applications.",
  icons: {
    icon: [
      // {
      //   url: '/favicon.ico',
      //   sizes: 'any',
      //   type: 'image/x-icon',
      // },
      {
        url: "/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: {
      url: "/logo.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} font-fredoka antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

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
      {
        rel: 'icon',
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: 'icon',
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: 'icon',
        url: "/favicon.ico",
        sizes: "any",
      }
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#7CC466'
      }
    ]
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} font-fredoka antialiased`}>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'linear-gradient(to right, #7CC466, #65A354)',
              color: '#fff',
            },
            classNames: {
              success: 'bg-gradient-to-r from-[#7CC466] to-[#65A354] text-white',
              error: 'bg-gradient-to-r from-[#ef4444] to-[#dc2626] text-white'
            }
          }}
        />
        {children}
      </body>
    </html>
  );
}

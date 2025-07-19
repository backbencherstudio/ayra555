import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "The Baby Grow",
  description:
    "The Baby Grow is a dynamic platform designed to create and share AI-powered applications, offering innovative solutions to support your baby’s growth and development through cutting-edge technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <link
          rel="canonical"
          href="https://www.thebabygrow.co.uk/"
        />
      </head>
      <body className={`${fredoka.variable} font-fredoka antialiased`}>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "linear-gradient(to right, #7CC466, #65A354)",
              color: "#fff",
            },
            classNames: {
              success:
                "bg-gradient-to-r from-[#7CC466] to-[#65A354] text-white",
              error: "bg-gradient-to-r from-[#ef4444] to-[#dc2626] text-white",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}

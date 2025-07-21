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
    "Trusted day nursery in the UK offering loving childcare for babies from 3 months. Safe, nurturing, and child-centred early learning environment.",
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
        <link rel="canonical" href="https://www.thebabygrow.co.uk/" />
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

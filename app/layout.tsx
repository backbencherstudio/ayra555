import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "The baby grow",
  description:
    "Thebabygrow is a platform for creating and sharing AI-powered applications.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" />
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

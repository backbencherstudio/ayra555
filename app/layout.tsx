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
        
        {/* Google Tag Manager (GTM) script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17382588846"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17382588846');
          `}
        </script>
        <script>
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TQ7MBQD9');
          `}
        </script>
      </head>
      <body className={`${fredoka.variable} font-fredoka antialiased`}>
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TQ7MBQD9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
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

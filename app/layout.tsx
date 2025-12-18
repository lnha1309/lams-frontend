import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "LAMS - London Academy of Management and Sciences",
  description:
    "London Academy of Management and Sciences (LAMS) - A premier platform offering courses from top universities and institutions around the world.",
  openGraph: {
    title: "LAMS - London Academy of Management and Sciences",
    description:
      "London Academy of Management and Sciences (LAMS) - A premier platform offering courses from top universities and institutions around the world.",
    url: "https://lams.ac/",
    images: ["/_resources/images/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=League+Gothic&family=Source+Sans+Pro:ital,wght@0,200;0,400;0,700;0,900;1,200;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <link
          href="/_resources/css/vendor/bootstrap-5.3.3.css"
          rel="stylesheet"
        />
        <link href="/_resources/css/vendor/tiny-slider.css" rel="stylesheet" />
        <link href="/_resources/css/vendor/owl.carousel.css" rel="stylesheet" />
        <link href="/_resources/css/global390e.css" rel="stylesheet" />
        <link href="/_resources/css/snippet.css" rel="stylesheet" />
        <link href="/_resources/css/vendor/aos.css" rel="stylesheet" />
        <link href="/_resources/css/landing-page.css" rel="stylesheet" />
        <link href="/_resources/css/newsroom.css" rel="stylesheet" />
        <link href="/_resources/css/homepage.css" rel="stylesheet" />
        <link href="/_resources/css/footer-custom.css" rel="stylesheet" />
        <link href="/_resources/css/about-us.css" rel="stylesheet" />
        <link
          rel="icon"
          type="image/png"
          href="/_resources/images/favicon.png"
        />
        <link
          rel="shortcut icon"
          href="/_resources/images/favicon.png"
          type="image/x-icon"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Script
          src="/_resources/js/vendor/jquery.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/_resources/js/vendor/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/_resources/js/vendor/modernizr.js"
          strategy="afterInteractive"
        />
        <Script
          src="/_resources/js/vendor/tiny-slider.js"
          strategy="afterInteractive"
        />
        <Script
          src="/_resources/js/vendor/owl.carousel.js"
          strategy="afterInteractive"
        />
        <Script
          src="/_resources/js/vendor/aos.js"
          strategy="afterInteractive"
        />
        <Script src="/_resources/js/global.js" strategy="afterInteractive" />
        <Script src="/_resources/js/homepage.js" strategy="afterInteractive" />
        <Script
          src="/_resources/js/homepage-alerts.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

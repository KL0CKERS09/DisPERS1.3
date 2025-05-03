import Footer from "../home-components/Footer";
import Navbar from "../home-components/navbar";

import "./global.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-[#F5F5F5]`}
      >
        <Navbar />
        {children}
        <Footer  />
      </body>
    </html>
  );
}
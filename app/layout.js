import "./globals.css";

import { Navbar, Footer } from "@/components/Export";
import ReduxProvider from "@/redux/ReduxProvider";

import NextUI from "@/components/NextUI";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Atharv Vani",
  description:
    "Hi! I am Atharv Vani, an aspiring Software & Frontend Developer",
  creator: "Atharv Vani",
  authors: [{ name: "Atharv Vani", url: "https://www.atharv110.tech" }],
  applicationName: "Portfolio",
  keywords: ["atharv", "vani", "atharva", "portfolio", "website"],
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en" className="bg-theme-white">
        <body>
          <Toaster position="top-center" />
          <NextUI>
            <Navbar />
            {children}
            <Footer />
          </NextUI>
        </body>
      </html>
    </ReduxProvider>
  );
}

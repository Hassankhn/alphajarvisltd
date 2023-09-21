import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alphajarvisltd - a supply firm",
  description: "A spply firm for top-notch customers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className={inter.className}>{children}</div>
        <Footer />
        {/* <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script> */}
      </body>
    </html>
  );
}

import { Inter, Lobster } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Filmovita",
  description: "All movies in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main_page">
          <Nav />
          <div className="content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

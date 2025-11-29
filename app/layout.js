import "./globals.css";
import Link from "next/link";
import { Quicksand } from 'next/font/google';
const kablammo = Quicksand({
  subsets: ['latin'],
})


export const metadata = {
  title: "FlipBrooke.com",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>


        <nav className="topnav">
          <Link href="/">home</Link>
          <Link href="/media">media</Link>
          <Link href="/info">info</Link>
        </nav>


        {children}

        <footer>
          <Link href="/info">
            <div className="copyright">&copy; 2024 - FlipBrooke - All Rights Reserved.</div>
          </Link>
        </footer>

      </body>
    </html>
  );
}

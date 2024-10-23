import { Montserrat, Poppins } from "next/font/google"

import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata = {
  title: "Web Developer in India  | Pranav Singh",
  description: "Pranav Singh is the website developer working as a freelance since 2018. According to google review He is the best Website Developer in India, Website Developer in Bihar",
};
const poppins = Poppins({
  weight: ['400', "500", "600", "700", "900"],
  subsets: ['latin'],
})
 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

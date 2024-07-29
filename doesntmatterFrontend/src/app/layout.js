import { Inter } from "next/font/google";
import "./globals.css";

import MasterHeader from "@/app/components/MasterHeader/MaterHeader.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doesn't Matter 🤷",
  description: "Film wolrd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
         <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
       <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="true"></script>
      </head>
      <body className="h-100 w-100 position-absolute">
        <MasterHeader></MasterHeader>
        {children}
        
      </body>


     


    </html>
    
  );
}

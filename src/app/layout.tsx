import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "./providers";

export const metadata: Metadata = {
  title: "Clon de X por Yamila De Olivera",
  description:
    "Generado con el objetivo de aprender y practicar nuevas tecnologías. Aprovechando la oportunidad para explorar y aplicar conceptos modernos en el desarrollo web, mejorar mis habilidades y experimentar con un stack tecnológico actual.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='dark'>
      <body>
       <Providers>
          {children}
       </Providers> 
      </body>
    </html>
  );
}

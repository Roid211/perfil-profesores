import { cn } from "@/lib/utils";
import "@/lib/styles/globals.css";
import { Inter } from "next/font/google"; // Importa la fuente de Google
import Navbar from "@/components/NavBar"; // Asegúrate de que la ruta sea correcta
import { ProfesoresProvider } from "@/context/ProfesoresContext";

export const metadata = {
  title: "Conoce a tu profe",
  description: "A Reddit clone built with Next.js and TypeScript.",
};


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "flex w-full min-h-screen flex-col items-center justify-between",
        inter.className
      )}
    >
      <body className="pt-2 bg-slate-50 antialiased">
      <ProfesoresProvider>
        <Navbar />
        <div className="max-w-7xl mx-auto h-full pt-12">
          {children}
        </div>
        </ProfesoresProvider>
      </body>
    </html>
  );
}

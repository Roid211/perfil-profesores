'use client';

import { FC } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { useProfesores } from "@/context/ProfesoresContext";

const page: FC = () => {
  const profesores = useProfesores();

  // Limitar a los primeros 4 profesores
  const destacados = profesores.slice(0, 4);

  return (
    <div className="lg:min-h-max debug-red sm:mb-5 :min-h-max pt-0 mt-0 mb-5 max-w-5xl mx-auto flex flex-col items-center justify-center">
      <div className="h-30 w-30 sm:h-15 sm:w-15">
        <img
          className=""
          alt="new"
          src="https://utp.ac.pa/sites/default/files/styles/tropical_slideshow_front_hv/public/slideshow_mes_de_la_patria.jpg?itok=p7dOk1dC"
        />
      </div>
      <div className="p-3 items-center justify-center flex flex-col gap-2">
        <p className="text-xl font-serif md:block">
          Bienvenido a conoce a tu profe
        </p>
        <Link
          href="/profesores"
          className={buttonVariants({ variant: "outline" })}
        >
          <p>Conoce a tu profesor aquí</p>
        </Link>
      </div>

      <div className="p-5">
        <h1 className="text-2xl font-bold text-center mb-6">Profesores Destacados</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {destacados.map((profesor) => (
            <Link href={`/profesores/${profesor.id}`} key={profesor.id}>
              <div
                className="border border-gray-300 rounded-lg p-4 lg:py-15 lg:px-24 shadow-md hover:shadow-lg transition-shadow lg:transform lg:scale-105 lg:hover:scale-110"
              >
                <img
                  src={profesor.imagen}
                  alt={profesor.nombre}
                  className="w-24 h-24 border border-[#800080] border-2 lg:w-24 lg:h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h2 className="text-lg lg:text-xl text-[#330033] font-semibold text-center">{profesor.nombre}</h2>
                <p className="text-sm lg:text-base text-[#003300] text-center">{profesor.departamento}</p>
                <div className="mt-4 text-center"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
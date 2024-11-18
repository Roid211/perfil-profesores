'use client';

import Link from 'next/link';
import { useProfesores } from '@/context/ProfesoresContext';

export default function HomePage() {
  const profesores = useProfesores();

  return (
    <div className="p-5"> 
    
  <h1 className="text-2xl font-bold text-center mb-6">Todos nuestros profesores</h1>
  <div className="grid  gap-8 sm:grid-cols-2 lg:grid-cols-2">
    {profesores.map((profesor) => (
        <Link href={`/profesores/${profesor.id}`} key={profesor.id}>
      <div
        key={profesor.id}
        className="border border-gray-300 rounded-lg p-4 lg:py-15 lg:px-24 shadow-md hover:shadow-lg transition-shadow lg:transform lg:scale-105 lg:hover:scale-110"
      >
        <img
          src={profesor.imagen}
          alt={profesor.nombre}
          className="w-24 h-24  border-[#800080] border-2  lg:w-24 lg:h-24 mx-auto rounded-full object-cover mb-4"
        />
        <h2 className="text-lg lg:text-xl text-[#330033] font-semibold text-center">{profesor.nombre}</h2>
        <p className="text-sm lg:text-base text-[#003300] text-center">{profesor.departamento}</p>
        <div className="mt-4 text-center">
          
        </div>
      </div>
      </Link>
    ))}
  </div>
</div>
  );
}

'use client';

import { useParams, useRouter } from 'next/navigation';
import { useProfesores } from '@/context/ProfesoresContext';
import Link from 'next/link';

export default function ProfesorDetalle() {
  const { id } = useParams();
  const profesores = useProfesores();
  const profesor = profesores.find((p) => p.id === parseInt(id));
  const router = useRouter(); // Hook para navegar

  if (!profesor) return <p className="text-center text-lg font-semibold text-red-600">Profesor no encontrado</p>;

  return (
    <div className='flex flex-col gap-3 mt-3'>
        {/* Botón de "Atrás" */}
        <button
          onClick={() => router.back()}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Atrás
        </button>
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">

      <div className="flex justify-between items-center mb-4">
        
      </div>

      <div className="text-center">
        <img
          src={profesor.imagen}
          alt={profesor.nombre}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-3xl font-semibold text-gray-800">{profesor.nombre}</h1>
        <p className="text-lg text-gray-600 mb-2">{profesor.departamento}</p>
        <p className="text-base text-blue-600 mb-4">{profesor.email}</p>
      </div>
      
      <div className="border-t-2 border-gray-200 pt-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Descripción</h2>
        <p className="text-base text-gray-700">{`Este profesor es especialista en su campo.`}</p>
      </div>
    </div></div>
  );
}

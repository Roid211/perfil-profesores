'use client';

import React, { createContext, useContext } from 'react';

const ProfesoresContext = createContext(null);

export const ProfesoresProvider = ({ children }: { children: React.ReactNode }) => {
  const profesores = [
    { 
      id: 1, 
      nombre: 'Juan Pérez', 
      departamento: 'Matemáticas', 
      email: 'juan.perez@utp.edu', 
      imagen: '/images/juan.jpg',
      descripcion: 'Especialista en álgebra y cálculo diferencial, con una pasión por enseñar de manera visual y clara.'
    },
    { 
      id: 2, 
      nombre: 'Ana López', 
      departamento: 'Programación', 
      email: 'ana.lopez@utp.edu', 
      imagen: '/images/ana.jpg',
      descripcion: 'Programadora experta en JavaScript, con un enfoque en el desarrollo web y la creación de interfaces intuitivas.'
    },
    { 
      id: 3, 
      nombre: 'Carlos Martínez', 
      departamento: 'Física', 
      email: 'carlos.martinez@utp.edu', 
      imagen: '/images/carlos.jpg',
      descripcion: 'Físico teórico que busca conectar los principios fundamentales de la física con la tecnología moderna.'
    },
    { 
      id: 4, 
      nombre: 'María García', 
      departamento: 'Ingeniería de Sistemas', 
      email: 'maria.garcia@utp.edu', 
      imagen: '/images/maria.jpg',
      descripcion: 'Ingeniera con especialización en redes de computadoras y seguridad informática, amante de los retos tecnológicos.'
    },
    { 
      id: 5, 
      nombre: 'Pedro Sánchez', 
      departamento: 'Diseño Gráfico', 
      email: 'pedro.sanchez@utp.edu', 
      imagen: '/images/pedro.jpg',
      descripcion: 'Diseñador gráfico con un enfoque innovador en interfaces de usuario y la creación de experiencias visuales impactantes.'
    },
    { 
      id: 6, 
      nombre: 'Lucía Fernández', 
      departamento: 'Química', 
      email: 'lucia.fernandez@utp.edu', 
      imagen: '/images/lucia.jpg',
      descripcion: 'Experta en química orgánica, con un enfoque en la investigación y desarrollo de materiales sostenibles.'
    },
    { 
      id: 7, 
      nombre: 'Raúl Díaz', 
      departamento: 'Inteligencia Artificial', 
      email: 'raul.diaz@utp.edu', 
      imagen: '/images/raul.jpg',
      descripcion: 'Investigador y profesor apasionado por la IA, especializado en aprendizaje automático y redes neuronales.'
    },
    { 
      id: 8, 
      nombre: 'Verónica Castro', 
      departamento: 'Biología', 
      email: 'veronica.castro@utp.edu', 
      imagen: '/images/veronica.jpg',
      descripcion: 'Bióloga con enfoque en biotecnología, trabajando en la mejora de procesos mediante la genética molecular.'
    },
  ];

  return (
    <ProfesoresContext.Provider value={profesores}>
      {children}
    </ProfesoresContext.Provider>
  );
};

export const useProfesores = () => {
  const context = useContext(ProfesoresContext);
  if (!context) throw new Error('useProfesores debe ser usado dentro de ProfesoresProvider');
  return context;
};

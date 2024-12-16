import { useState, useMemo } from 'react';
import { useQuery } from 'react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { getLibros, getLibrosDisponibles, getLibrosNoDisponibles } from '../services/api';
import { LibroCard } from './LibroCard';
import { LibrosFilter, FilterType } from './LibrosFilter';
import { Libro } from '../types';

export const LibrosSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('todos');

  const { data: todosLibros = [] } = useQuery('libros', getLibros);
  const { data: librosDisponibles = [] } = useQuery(
    'librosDisponibles',
    getLibrosDisponibles
  );
  const { data: librosNoDisponibles = [] } = useQuery(
    'librosNoDisponibles',
    getLibrosNoDisponibles
  );

  const librosAMostrar = useMemo(() => {
    switch (activeFilter) {
      case 'disponibles':
        return librosDisponibles;
      case 'no-disponibles':
        return librosNoDisponibles;
      default:
        return todosLibros;
    }
  }, [activeFilter, todosLibros, librosDisponibles, librosNoDisponibles]);

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-red-500">Libros</h2>
        <LibrosFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {librosAMostrar.map((libro: Libro) => (
            <LibroCard key={libro.id} libro={libro} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
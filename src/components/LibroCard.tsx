import { motion } from 'framer-motion';
import { Book } from 'lucide-react';
import { Libro } from '../types';

interface LibroCardProps {
  libro: Libro;
}

export const LibroCard = ({ libro }: LibroCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg border border-red-800/20"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{libro.titulo}</h3>
          <p className="text-gray-400">Por: {libro.autor.nombre}</p>
          <p className="text-sm text-gray-500">{libro.autor.nacionalidad}</p>
        </div>
        <Book className="text-red-500" size={24} />
      </div>
      <div className="mt-4">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            libro.disponible
              ? 'bg-green-900/20 text-green-400'
              : 'bg-red-900/20 text-red-400'
          }`}
        >
          {libro.disponible ? 'Disponible' : 'No Disponible'}
        </span>
      </div>
    </motion.div>
  );
};
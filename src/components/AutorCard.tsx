import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { Autor } from '../types';

interface AutorCardProps {
  autor: Autor;
}

export const AutorCard = ({ autor }: AutorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg border border-red-800/20"
    >
      <div className="flex items-center gap-4">
        <User className="text-red-500" size={24} />
        <div>
          <h3 className="text-xl font-bold text-white">{autor.nombre}</h3>
          <p className="text-gray-400">{autor.nacionalidad}</p>
        </div>
      </div>
    </motion.div>
  );
};
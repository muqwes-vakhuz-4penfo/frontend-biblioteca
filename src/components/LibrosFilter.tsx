import { motion } from 'framer-motion';

export type FilterType = 'todos' | 'disponibles' | 'no-disponibles';

interface LibrosFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const LibrosFilter = ({ activeFilter, onFilterChange }: LibrosFilterProps) => {
  return (
    <div className="flex space-x-2 mb-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onFilterChange('todos')}
        className={`px-4 py-2 rounded-lg transition-colors ${
          activeFilter === 'todos'
            ? 'bg-red-500 text-white'
            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
        }`}
      >
        Todos los Libros
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onFilterChange('disponibles')}
        className={`px-4 py-2 rounded-lg transition-colors ${
          activeFilter === 'disponibles'
            ? 'bg-green-600 text-white'
            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
        }`}
      >
        Disponibles
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onFilterChange('no-disponibles')}
        className={`px-4 py-2 rounded-lg transition-colors ${
          activeFilter === 'no-disponibles'
            ? 'bg-red-600 text-white'
            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
        }`}
      >
        No Disponibles
      </motion.button>
    </div>
  );
};
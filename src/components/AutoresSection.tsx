import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { getAutores } from '../services/api';
import { AutorCard } from './AutorCard';

export const AutoresSection = () => {
  const { data: autores = [] } = useQuery('autores', getAutores);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-red-500">Autores</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {autores.map((autor) => (
          <AutorCard key={autor.id} autor={autor} />
        ))}
      </div>
    </section>
  );
};
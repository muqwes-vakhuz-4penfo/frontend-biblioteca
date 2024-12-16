import { QueryClient, QueryClientProvider } from 'react-query';
import { motion } from 'framer-motion';
import { Library } from 'lucide-react';
import { useState } from 'react';
import { Tabs } from './components/Tabs';
import { LibrosSection } from './components/LibrosSection';
import { AutoresSection } from './components/AutoresSection';

const queryClient = new QueryClient();

const tabs = [
  { id: 'libros', label: 'Libros' },
  { id: 'autores', label: 'Autores' },
];

function BibliotecaApp() {
  const [activeTab, setActiveTab] = useState('libros');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <Library className="text-red-500" size={32} />
            <h1 className="text-3xl font-bold">Biblioteca Digital</h1>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'libros' ? <LibrosSection /> : <AutoresSection />}
        </motion.div>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BibliotecaApp />
    </QueryClientProvider>
  );
}

export default App;
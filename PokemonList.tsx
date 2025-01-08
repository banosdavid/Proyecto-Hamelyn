import { useState } from 'react';
import { Pokemon } from '@/lib/types'; // Asegúrate de que 'Pokemon' esté correctamente importado desde la ruta correcta
import { PokemonTable } from './PokemonTable'; // Componente de tabla de Pokémon
import { PokemonSearch } from './PokemonSearch'; // Componente para búsqueda
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'; // Componentes de UI
import { LoadingSpinner } from '@/components/ui/loading-spinner'; // Componente de carga

// Define la interfaz 'PokemonListProps' para especificar las props que recibirá el componente
export interface PokemonListProps {
  pokemons: Pokemon[];  // Lista de Pokémon
  currentPage: number;  // Página actual
  total: number;        // Total de Pokémon
  totalPages: number;   // Total de páginas
  onPageChange: (page: number) => void;  // Callback para manejar el cambio de página
  isLoading: boolean;   // Estado de carga
}

export function PokemonList({
  pokemons,
  currentPage,
  total,
  totalPages,
  onPageChange,
  isLoading,
}: PokemonListProps): React.JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  // Filtrado de los Pokémon según el término de búsqueda y el tipo seleccionado
  const filteredPokemon = pokemons.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || p.types.includes(selectedType);
    return matchesSearch && matchesType;
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pokemon List</CardTitle>
        <PokemonSearch
          searchTerm={searchTerm}
          selectedType={selectedType}
          onSearchChange={setSearchTerm}
          onTypeChange={setSelectedType}
          types={Array.from(new Set(pokemons.flatMap((p) => p.types)))}
        />
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <LoadingSpinner />
            <span className="ml-3 text-lg text-gray-600">Loading Pokemon...</span>
          </div>
        ) : (
          <div>
            {/* Lista de Pokémon filtrada */}
            <PokemonTable pokemon={filteredPokemon} />
            {/* Controles de paginación */}
            <div className="pagination flex justify-center mt-4">
              <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Anterior
              </button>
              <span className="mx-4 text-lg">
                Página {currentPage} de {totalPages}
              </span>
              <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
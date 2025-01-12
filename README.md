# Proyecto-Hamelyn
La aplicación consta de dos componentes principales:

PokemonList: Muestra una lista de Pokémon y permite al usuario cambiar de página.
Page: Muestra los detalles de un Pokémon individual.
Funcionalidad

PokemonList:
Utiliza el hook usePokemon para obtener los datos de los Pokémon.
Muestra una lista de Pokémon y permite al usuario cambiar de página.
Utiliza el componente PokemonList para mostrar la lista de Pokémon.
PokemonPage:
Utiliza el hook fetch para obtener los datos de un Pokémon individual.
Muestra los detalles del Pokémon, incluyendo su nombre, altura, peso y descripción.
Utiliza el componente Loading para mostrar un indicador de carga mientras se obtienen los datos.
Hooks

La aplicación utiliza dos hooks:

usePokemon: Obtiene los datos de los Pokémon y los devuelve en un formato adecuado para la aplicación.
fetch: Obtiene los datos de un Pokémon individual y los devuelve en un formato adecuado para la aplicación.
Tipos

La aplicación utiliza dos tipos:

Pokemon: Representa un Pokémon y tiene propiedades como id, name, types, stats, imageUrl y description.
PokemonDetails: Representa los detalles de un Pokémon y tiene propiedades como name, height, weight, sprites y description.
Errores

La aplicación maneja errores de la siguiente manera:

Si ocurre un error al obtener los datos de los Pokémon, se muestra un mensaje de error.
Si ocurre un error al obtener los datos de un Pokémon individual, se muestra un mensaje de error.








El archivo importa varios componentes y tipos de otros archivos:

Pokemon de @/lib/types: Un tipo que representa un Pokémon.
PokemonTable de ./PokemonTable: Un componente que muestra una tabla de Pokémon.
PokemonSearch de ./PokemonSearch: Un componente que permite buscar Pokémon.
Card, CardHeader, CardContent, CardTitle de @/components/ui/card: Componentes de UI para mostrar una tarjeta con título y contenido.
LoadingSpinner de @/components/ui/loading-spinner: Un componente que muestra un indicador de carga.
Interfaz PokemonListProps

La interfaz PokemonListProps define las propiedades que recibe el componente PokemonList:

pokemons: Una lista de Pokémon.
currentPage: La página actual.
total: El total de Pokémon.
totalPages: El total de páginas.
onPageChange: Un callback que se llama cuando se cambia de página.
isLoading: Un booleano que indica si se está cargando la lista de Pokémon.
Componente PokemonList

El componente PokemonList recibe las propiedades definidas en la interfaz PokemonListProps y devuelve un elemento JSX.

Estado

El componente utiliza dos estados:

searchTerm: Un string que almacena el término de búsqueda.
selectedType: Un string que almacena el tipo de Pokémon seleccionado.
Filtrado de Pokémon

El componente filtra la lista de Pokémon según el término de búsqueda y el tipo seleccionado utilizando la función filter.

Renderizado

El componente renderiza una tarjeta con título y contenido. El contenido incluye:

Un componente PokemonSearch que permite buscar Pokémon.
Una tabla de Pokémon filtrada utilizando el componente PokemonTable.
Controles de paginación que permiten cambiar de página.
Carga

Si se está cargando la lista de Pokémon, el componente muestra un indicador de carga utilizando el componente LoadingSpinner.









hooks
Evitar componentes de clase: Los hooks simplifican el código y eliminan la necesidad de usar componentes de clase.
Reutilización de lógica: Puedes compartir lógica entre componentes a través de hooks personalizados.
Mejor legibilidad: Reducen la complejidad del código al organizar la lógica por funcionalidad en lugar de dividirla en métodos de ciclo de vida.
Principales hooks y para qué sirven
1. useState
Se utiliza para manejar el estado en componentes funcionales.
Almacena y actualiza valores dinámicos en un componente.
Ejemplo:

javascript
Copiar código
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Estado inicial: 0

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
2. useEffect
Maneja efectos secundarios en componentes funcionales, como:
Llamadas a APIs.
Manipulación directa del DOM.
Suscripciones y limpieza.

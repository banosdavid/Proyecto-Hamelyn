/**
 * Interfaz que define la estructura de un Pokémon.
 */
export interface Pokemon {
  id: number; // ID único del Pokémon
  name: string; // Nombre del Pokémon
  types: string[]; // Tipos del Pokémon (por ejemplo, "Fire", "Water")
  stats: Stats; // Estadísticas del Pokémon
  imageUrl: string; // URL de la imagen del Pokémon
  description: string; // Descripción del Pokémon
}

/**
 * Interfaz que define las estadísticas de un Pokémon.
 */
interface Stats {
  hp: number; // Puntos de vida (HP)
  attack: number; // Ataque
  defense: number; // Defensa
  specialAttack: number; // Ataque especial
  specialDefense: number; // Defensa especial
  speed: number; // Velocidad
}

/**
 * Respuesta de la API que contiene un conjunto de Pokémon, usada para la paginación.
 */
export interface PokemonResponse {
  count: number; // Cantidad total de Pokémon
  results: Pokemon[]; // Array de Pokémon
  next?: string; // URL de la siguiente página de resultados (opcional)
  previous?: string; // URL de la página anterior (opcional)
}

/**
 * Estado de autenticación, para determinar si un usuario está autenticado.
 */
export interface AuthState {
  isAuthenticated: boolean;
}

/**
 * Detalles específicos de un Pokémon cuando se recibe de una API, como la PokeAPI.
 */
export interface PokemonDetails {
  name: string; // Nombre del Pokémon
  height: number; // Altura del Pokémon
  weight: number; // Peso del Pokémon
  sprites: {
    front_default: string; // Imagen principal del Pokémon
    other?: { [key: string]: { front_default: string } }; // Otras imágenes posibles (opcional)
  };
}

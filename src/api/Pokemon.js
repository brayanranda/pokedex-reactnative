import { API_HOST } from "../utils/constants";

// Como es asincrona y puede dar error se coloca async
export async function getPokemonApi() {
  try {
    //   Limite de 20 pokemons por pagina
    // Que empiece por el pokemon 0
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    // Petición al servidor
    const response = await fetch(url);
    // Me devuelve los datos en un .json
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

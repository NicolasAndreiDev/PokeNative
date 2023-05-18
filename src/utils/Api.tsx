import axios from 'axios';

export default async function API() {
  const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/20');
  return pokemon.data;
}

import axios from 'axios';

export default async function API({id}: {id: number}) {
  const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return pokemon.data;
}

import { error } from "@sveltejs/kit"

export async function load({ params }) {

  const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/generation/${params.id}`)

  if(response.ok && response.status === 200) {
    const pokemons = await response.json()

    return {
      genId: params.id,
      pokemons,
    }
  }

  throw error(404, {
    message: 'Not found'
  })
  
}
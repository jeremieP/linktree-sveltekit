<script>
	import { each } from "svelte/internal"
  import PokemonCard from "$lib/components/PokemonCard.svelte"
  export let data
</script>

<h1 class="font-bold mt-4 mb-8 text-4xl text-center text-white">Pokemon de la génération #{data.genId}</h1>

<div class="grid grid-cols-4">
  {#each data.pokemons as item}
    <PokemonCard pokemon={item} />
  {/each}
</div>

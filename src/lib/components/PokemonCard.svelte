<script lang="js">
  export let pokemon
</script>

<div class="text-center">
  <img
    src="{pokemon.sprite}"
    class="rounded-full w-32 mb-4 mx-auto"
    alt="{pokemon.name}"
  />
  <h5 class="text-xl text-white font-medium leading-tight mb-2">#{pokemon.pokedexId} {pokemon.name}</h5>
</div>
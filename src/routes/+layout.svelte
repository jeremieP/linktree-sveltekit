<script>
  import "../app.css"
  import data from "$lib/data/data.json"
</script>

<svelte:head>
  <title>{data.seo.title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="description" content={data.seo.description} />
</svelte:head>

<div class="flex items-center flex-col mx-auto w-full h-screen pt-16 px-8">
  <slot />
</div>

<style lang="postcss">
  :global(body) {
    background-image: linear-gradient(
      50deg,
      hsl(269deg 100% 28%) 0%,
      hsl(269deg 100% 27%) 33%,
      hsl(269deg 99% 25%) 50%,
      hsl(269deg 99% 24%) 61%,
      hsl(269deg 99% 22%) 68%,
      hsl(268deg 99% 20%) 73%,
      hsl(268deg 98% 18%) 77%,
      hsl(268deg 98% 16%) 82%,
      hsl(267deg 97% 13%) 88%,
      hsl(264deg 96% 9%) 100%
    )
  }
</style>
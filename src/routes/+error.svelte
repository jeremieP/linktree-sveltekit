<script>
  import DeadLink from "../lib/components/DeadLink.svelte"
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
</svelte:head>

<DeadLink />
<h1 class="text-6xl font-bold mt-4 mb-3 text-center text-white">
  Oops ! You found a dead Link !
</h1>
<a href="/" class="animate-pulse font-bold mb-8 text-4xl text-center text-white">
  Continue ?
</a>

<style>
  h1 {
    font-family: 'VT323', monospace;
  }
</style>
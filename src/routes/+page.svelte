<script lang="ts">
  import data from "$lib/data/data.json"
  import SocialIcon from "../lib/components/SocialIcon.svelte";

</script>

<img 
  src="{data.me.avatar}"
  class="rounded-full"
  width="120"
  height="120"
  alt="{data.me.name}"
/>
<h1 class="font-bold mt-4 mb-1 text-xl text-center text-white">
  {data.me.name}
</h1>
<h2 class="font-bold mb-8 text-xl text-center text-white">
  {data.me.job.title} - <a class="underline hover:no-underline" href={data.me.job.url} target="_blank" rel="noopener noreferrer">{data.me.job.company}</a>
</h2>


<div class="flex items-center gap-4 mt-8 text-white">
  {#each data.socials as item}
    <SocialIcon {...item} />
  {/each}
</div>
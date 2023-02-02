<div class="deadLink" aria-hidden></div>
<audio id="audioPlayer" src="/deadlink-sound.mp3" />

<script lang="ts">
  import { onMount } from "svelte"
  onMount(() => {
    setTimeout(() => {
      const audioSrc = document.getElementById('audioPlayer')
      audioSrc?.play()
    }, 900)
  })
  
</script>

<style>
  div {
    height: 301px;
    width: 301px;
    background-image: url('/deadlink-sprite.png');
    background-position: 0px 0px;

    animation-duration: 2s;
    animation-name: deadlink-anim;
    animation-timing-function: steps(14);
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }

  @keyframes deadlink-anim {
    to {
      background-position: -4214px 0px;
    }
  }
</style>
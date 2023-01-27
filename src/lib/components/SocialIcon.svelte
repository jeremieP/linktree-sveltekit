<script lang="ts">
  import Github from "./icons/Github.svelte"
  import Linkedin from "./icons/Linkedin.svelte"
  import Twitter from "./icons/Twitter.svelte"
  import Discord from "./icons/Discord.svelte"

  export let title:string, url:string

  const getIconComponent = (url:string) => {
    switch(true) {
      case url.includes('twitter'):
        return Twitter
        
      case url.includes('github'):
        return Github

      case url.includes('linkedin'):
        return Linkedin

      case url.includes('discord'):
        return Discord

      default:
        return 
    }
  }
</script>

<a
  aria-label={`${title} link`}
  href={url}
  target="_blank"
  rel="noopener noreferrer"
>
  <svelte:component this={getIconComponent(url)} />
</a>
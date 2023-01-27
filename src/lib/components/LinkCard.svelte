<script lang="ts">
  export let url:string, image: string, title: string
</script>

<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  class="flex items-center p-1 w-full rounded-full hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
>
  <div class="flex text-center w-full">
    <div class="w-10 h-10">
      <img
        class="rounded-full"
        width="40"
        height="40"
        alt="{title}"
        src="{image}"
        loading="lazy"
      />
    </div>
    <h2 class="flex justify-center items-center font-semibold w-full text-gray-700 -ml-10">
      {title}
    </h2>
  </div>

</a>
<script lang="ts">
  export let key: any = null;
  export let before: any = null;
  export let after: any = null;
  export let principal: any = null;
  export let secundario: any = null;
</script>

<div class="flex flex-col p-5  bg-zinc-200 text-black dark:bg-black dark:text-white">
  {#if key}
    <blockquote class="text-3xl sm:text-4xl md:text-5xl font-black ">
      {before}
      <span
        class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-900"
      >
        <span class="relative text-white dark:text-gray-950">{key}</span>
      </span>
      <p class="p-2 text-sm sm:text-base text-center font-light dark:text-zinc-400">
        {after}
      </p>
    </blockquote>
  {/if}

  {#if principal}
    <h1 class="text-3xl dark:text-white/70 sm:text-4xl md:text-5xl font-black">{principal}</h1>
  {/if}
  {#if secundario}
    <p class="p-2 text-sm sm:text-base dark:text-zinc-400/80">{secundario}</p>
  {/if}
</div>

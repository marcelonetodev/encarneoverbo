<script lang="ts">
  export let texto = "";
  export let icone = "";
  // export let iconeS = "";
  export let href = "/";
  // let active: boolean;
</script>

<li class="w-full">
  <a
    {href}
    class="underline-offset-8 flex gap-2 items-center justify-center lg:justify-start cursor-pointer px-2 py-2 hover:underline hover:text-white text-zinc-300 hover:bg-zinc-950 lg:rounded-sm rounded-t-sm w-full"
    >
    <!-- on:click={() => active = true} -->
    {#if texto}
      <span>{texto}</span>
    {/if}
    {#if icone}
      <div
        class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-transparent"
      >
        <span class="font-medium text-gray-600 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
            <!-- <path d={active ? iconeS : icone} /> -->
              <path stroke-linecap="round" stroke-linejoin="round" d={icone} />
            </svg>
        </span>
      </div>
    {/if}
  </a>
</li>

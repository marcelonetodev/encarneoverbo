<script lang="ts">
  import { marked } from "marked";

  export let textoMarkdown: any = null;
  export let texto: any = null;
  export let autor: any = null;
  export let textoSB: any = null;
  export let img: any = null;
  export let descricaoImg: any = null;
  export let versiculo: any = null;
  export let index: any = null;
</script>

{#if img}
  <img
    src={img}
    alt={descricaoImg}
    class="rounded w-full sm:w-auto overflow-hidden"
  />
{/if}

{#if texto}
  <div
    class="flex flex-col sm:flex-row border dark:border-zinc-800 border-zinc-400 rounded-md gap-5 p-5  bg-zinc-300 text-black dark:bg-black dark:text-white"
  >
    <p class="text-justify dark:text-zinc-400 text-sm sm:text-base">
      {texto}
    </p>
  </div>
{/if}
{#if textoSB}
  <div class="flex flex-col sm:flex-row gap-5 lg:p-3">
    <p class="p-5 text-justify dark:text-zinc-400 font-light text-sm sm:text-base">
      {textoSB}
    </p>
  </div>
{/if}

{#if versiculo}
  <div class="flex flex-row gap-5 py-5 px-4 dark:bg-zinc-950 bg-zinc-300 rounded-sm">
    {#if index}
      <span class="pl-0 pr-0 py-1 dark:text-zinc-500 text-xs sm:text-sm">
        {index}
      </span>
    {/if}
    <span class="border-b border dark:border-blue-950"></span>
    <div class="flex flex-col w-full">

      <p
        class="py-1 pl-0 pr-8 text-justify dark:text-zinc-400 text-sm sm:text-base flex-1 font-light"
      >
        {versiculo}
      </p>
      {#if autor}
        <p class="flex-1 pr-8 text-end py-1 dark:text-zinc-600 text-xs sm:text-sm">
          {autor}
        </p>
      {/if}
    </div>
  </div>
{/if}

{#if textoMarkdown}
  <div
    class="p-5 text-justify dark:bg-zinc-950 bg-zinc-300 gap-5 text-sm lg:text-base text-zinc-500 rounded-sm"
  >
  <p class=" text-zinc-500 text-sm">
    {@html marked.parse(textoMarkdown)}
  </p>
  </div>
{/if}

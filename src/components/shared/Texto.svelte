<script lang="ts">
  import { marked } from "marked";

  export let textoMarkdown: any = null;
  export let texto: any = null;
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
    class="flex flex-col sm:flex-row border border-zinc-800 rounded-md gap-5 p-5"
  >
    <p class="text-justify text-zinc-400 text-sm sm:text-base">
      {texto}
    </p>
  </div>
{/if}
{#if textoSB}
  <div class="flex flex-col sm:flex-row gap-5 p-5">
    <p class="text-justify text-zinc-400 text-sm sm:text-base">
      {textoSB}
    </p>
  </div>
{/if}

{#if versiculo && index}
  <div class="flex flex-row gap-5 p-4 bg-zinc-950">
    <span class="pl-3 pr-0 py-1 text-zinc-600 text-xs sm:text-sm">
      {index}
    </span>
    <p class="py-1 pl-0 pr-5 text-justify text-zinc-400 text-sm sm:text-base">
      {versiculo}
    </p>
  </div>
{/if}

{#if textoMarkdown}
  <div
    class="flex flex-col sm:flex-row border border-zinc-800 rounded-md gap-5 text-sm sm:text-base text-zinc-400"
  >
    <p class="p-5 text-justify">{@html marked.parse(textoMarkdown)}</p>
  </div>
{/if}

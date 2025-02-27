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
  <div class="flex flex-col sm:flex-row gap-5 lg:p-3">
    <p class="p-5 text-justify text-zinc-400 font-light text-sm sm:text-base">
      {textoSB}
    </p>
  </div>
{/if}

{#if versiculo && index}
  <div class="flex flex-row gap-5 p-2 py-5 bg-zinc-950 rounded-sm">
    <span class="pl-0 pr-0 py-1 text-zinc-600 text-xs sm:text-sm">
      {index}
    </span>
    <span class="border-b border border-zinc-800"></span>
    <p class="py-1 pl-0 pr-8 text-justify text-zinc-400 text-sm sm:text-base flex-1 font-light">
      {versiculo}
    </p>
  </div>
  {/if}

{#if textoMarkdown}
  <div
    class="flex flex-col sm:flex-row gap-5 text-sm sm:text-base text-zinc-400 lg:p-5 lg:border lg:border-zinc-900 lg:rounded-md"
  >
    <p class="p-5 text-justify bg-zinc-950 rounded-sm font-light">{@html marked.parse(textoMarkdown)}</p>
  </div>
{/if}

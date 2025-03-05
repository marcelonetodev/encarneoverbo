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

{#if versiculo}
  <div class="flex flex-row gap-5 py-5 px-4 bg-zinc-950 rounded-sm">
    {#if index}
      <span class="pl-0 pr-0 py-1 text-zinc-600 text-xs sm:text-sm">
        {index}
      </span>
    {/if}
    <span class="border-b border border-zinc-800"></span>
    <div class="flex flex-col w-full">

      <p
        class="py-1 pl-0 pr-8 text-justify text-zinc-400 text-sm sm:text-base flex-1 font-light"
      >
        {versiculo}
      </p>
      {#if autor}
        <p class="flex-1 pr-2 text-end py-1 text-zinc-600 text-xs sm:text-sm">
          {autor}
        </p>
      {/if}
    </div>
  </div>
{/if}

{#if textoMarkdown}
  <div
    class="p-5 text-justify bg-zinc-950 font-light gap-5 text-sm sm:text-base text-zinc-400 rounded-sm"
  >
    {@html marked.parse(textoMarkdown)}
  </div>
{/if}

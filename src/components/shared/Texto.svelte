<!-- <script lang="ts">
  import { marked } from "marked";

  export let textoMarkdown: any = null;
  export let texto: any = null;
</script>

{#if texto}
  <div class="flex border border-zinc-800 rounded-md gap-5">
    <p class="p-5 text-justify text-zinc-400">{texto}</p>
  </div>
{/if}

{#if textoMarkdown}
  <div
    class="flex border border-zinc-800 rounded-md gap-5 text-sm/6 text-zinc-400"
  >
    <p class="p-5 text-justify">{@html marked.parse(textoMarkdown)}</p>
  </div>
{/if} -->

<script lang="ts">
  import { marked } from "marked";

  export let textoMarkdown: any = null;
  export let texto: any = null;
  export let versiculo: any = null;
  export let index: any = null;
</script>

{#if texto}
  <div
    class="flex flex-col sm:flex-row border border-zinc-800 rounded-md gap-5"
  >
    <p class="p-5 text-justify text-zinc-400 text-sm sm:text-base">{texto}</p>
  </div>
{/if}
{#if versiculo && index}
  <div class="flex flex-col sm:flex-row gap-5 p-3">
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

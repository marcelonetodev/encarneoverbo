<!-- <script lang="ts">
  export let funcao: any = null;
  export let texto: any = null;
</script>

{#if funcao}
  <button
    onclick={funcao}
    class=" cursor-pointer border-zinc-800 border rounded-md p-2 text-zinc-400 hover:bg-zinc-600"
    >{texto}</button
  >
{/if} -->

<script lang="ts">
  export let funcao: any = null;
  export let texto: any = null;
</script>

{#if funcao}
  <button
    onclick={funcao}
    class="cursor-pointer border border-zinc-800 rounded-md p-2 text-zinc-400 hover:bg-zinc-600 text-sm sm:text-base px-4 sm:px-6"
  >
    {texto}
  </button>
{/if}

<script lang="ts">
  export let funcao: any = null;
  export let capitulo: any = null;
  export let funcaoSalvar: any = null;
  export let funcaoApagar: any = null;
  export let texto: any = null;
</script>

{#if funcao}
  <button
    onclick={funcao}
    class="cursor-pointer text-align text-center justify-center bg-zinc-950 border border-zinc-950/80 rounded-sm p-2 text-zinc-600 hover:bg-zinc-600 hover:text-black text-sm sm:text-base px-4 sm:px-6"
  >
    {texto}
  </button>
{/if}

{#if capitulo}
  <button
    onclick={capitulo}
    class="cursor-pointer border text-align text-center justify-center border-zinc-800 rounded-md p-2 text-zinc-400 hover:bg-zinc-600 text-sm sm:text-base px-4 sm:px-6 sm:py-2"
  >
    {texto}
  </button>
{/if}

{#if funcaoApagar}
  <button
    onclick={funcaoApagar}
    class="cursor-pointer border text-align text-center justify-center border-zinc-800 rounded-md p-2 text-zinc-400 hover:bg-red-600/20 text-sm sm:text-base px-4 sm:px-6"
  >
    {texto}
  </button>
{/if}
{#if funcaoSalvar}
  <button
    onclick={funcaoSalvar}
    class="cursor-pointer border text-align text-center justify-center border-zinc-800 rounded-md p-2 text-zinc-400 hover:bg-green-600/20 text-sm sm:text-base px-4 sm:px-6"
  >
    {texto}
  </button>
{/if}

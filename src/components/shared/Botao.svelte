<script lang="ts">
  export let funcao: any = null;
  export let left: any = null;
  export let right: any = null;
  export let capitulo: any = null;
  export let funcaoSalvar: any = null;
  export let funcaoApagar: any = null;
  export let texto: any = null;
</script>

{#if funcao}
  <button
    onclick={funcao}
    class="cursor-pointer text-align text-center justify-center dark:bg-zinc-900 bg-zinc-300 border dark:border-zinc-950/80 border-zinc-300 rounded-sm p-2 text-zinc-400 hover:bg-zinc-600/40 hover:text-black text-sm sm:text-base px-4 sm:px-6"
  >
    {texto}
  </button>
{/if}

{#if left}
  <button
    onclick={left}
    class="fixed top-100 opacity-50 left-4 lg:static cursor-pointer text-align text-center justify-center dark:bg-zinc-700 bg-zinc-500 border dark:border-zinc-700 border-zinc-500 rounded-md lg:rounded-sm lg:p-2 text-zinc-100 hover:bg-zinc-600/40 hover:text-black text-sm sm:text-base py-2 px-4"
  >
    {texto}
  </button>
{/if}
{#if right}
  <button
    onclick={right}
    class="fixed top-100 opacity-50 right-4 lg:static cursor-pointer text-align text-center justify-center dark:bg-zinc-700 bg-zinc-500 border dark:border-zinc-700 border-zinc-500 rounded-md lg:rounded-sm lg:p-2 text-zinc-100 hover:bg-zinc-600/40 hover:text-black text-sm sm:text-base py-2 px-4"
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

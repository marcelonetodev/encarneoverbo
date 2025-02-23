<script lang="ts">
  export let funcao: any = null;
  export let texto: any = null;
</script>

{#if funcao}
  <button
    onclick={funcao}
    class=" cursor-pointer border-zinc-800 border rounded-md p-2"
    >{texto}</button
  >
{/if}

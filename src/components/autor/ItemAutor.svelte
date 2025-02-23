<script lang="ts">
  export let autor: any = null;
</script>

{#if autor}
  <a
    href="/autores/{autor.id}"
    class=" relative rounded-md flex flex-col overflow-hidden border border-zinc-800"
  >
    <img src={autor.imagem} alt={autor.nome} class=" h-96 object-cover" />
    <div
      class="bg-black/50 w-full absolute px-6 py-4 flex justify-end bottom-0"
    >
      <span class="font-black text-2xl">{autor.nome}</span>
    </div>
  </a>
{/if}

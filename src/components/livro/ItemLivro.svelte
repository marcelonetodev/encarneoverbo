<script lang="ts">
  export let livro: any = null;
</script>

{#if livro}
  <div>
    <a
      href="/livros/{livro.id}"
      class=" relative rounded-md flex flex-col overflow-hidden border border-zinc-800"
    >
      <img src={livro.imagem} alt={livro.titulo} class=" h-96 object-cover" />
      <div
        class="bg-black/50 w-full absolute px-6 py-4 flex justify-end bottom-0"
      >
        <span class="font-black text-2xl">{livro.titulo}</span>
      </div>
    </a>
  </div>
{/if}

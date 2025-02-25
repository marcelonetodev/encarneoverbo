<script lang="ts">
  export let livro: any = null;
</script>

{#if livro}
  <div class="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
    <a
      href="/livros/{livro.id}"
      class="relative rounded-md flex flex-col overflow-hidden border border-zinc-800"
    >
      <img
        src={livro.imagem}
        alt={livro.titulo}
        class="w-full h-72 sm:h-80 md:h-96 object-cover"
      />
      <div
        class="bg-black/50 w-full absolute px-6 py-4 flex justify-end bottom-0"
      >
        <span class="font-black text-xl sm:text-2xl md:text-3xl"
          >{livro.titulo}</span
        >
      </div>
    </a>
  </div>
{/if}

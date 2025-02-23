<script>
  import ItemLivro from "../components/livro/ItemLivro.svelte";
  import Titulo from "../components/shared/Titulo.svelte";
  import livros from "../constants/livros";
</script>

<div class="flex flex-col gap-10">
  <Titulo
    principal="Livros"
    secundario="Livros que marcaram a vida de todos que O lê."
  />
  <div class="flex flex-col grid grid-cols-3 gap-5">
    {#each livros as livro}
      <ItemLivro {livro} />
    {/each}
  </div>
</div>

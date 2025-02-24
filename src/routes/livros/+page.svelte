<!-- <script>
  import livros from "../../constants/livros.js";
  import ItemLivro from "../../components/livro/ItemLivro.svelte";
  import Titulo from "../../components/shared/Titulo.svelte";
</script>

<div class="flex flex-col gap-10">
  <Titulo
    principal="Livros"
    secundario="Conheça os livros das principais histórias que você ama!"
  />

  <div class="flex flex-col grid grid-cols-3 gap-5">
    {#each livros as livro}
      <ItemLivro {livro} />
    {/each}
  </div>
</div> -->

<script>
  import livros from "../../constants/livros.js";
  import ItemLivro from "../../components/livro/ItemLivro.svelte";
  import Titulo from "../../components/shared/Titulo.svelte";
</script>

<div class="flex flex-col gap-10 px-5">
  <Titulo
    principal="Livros"
    secundario="Conheça os livros das principais histórias que você ama!"
  />

  <!-- Grid responsiva para os livros -->
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
  >
    {#each livros as livro}
      <ItemLivro {livro} />
    {/each}
  </div>
</div>

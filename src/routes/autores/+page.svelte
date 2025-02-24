<!-- <script>
  import autores from "../../constants/autores.js";
  import ItemAutor from "../../components/autor/ItemAutor.svelte";
  import Titulo from "../../components/shared/Titulo.svelte";
</script>

<div class="flex flex-col gap-10">
  <Titulo
    principal="Autores"
    secundario="Conheça os autores que escrevem as principais histórias que você ama!"
  />

  <div class="flex flex-col grid grid-cols-2 gap-5">
    {#each autores as autor}
      <ItemAutor {autor} />
    {/each}
  </div>
</div> -->

<script>
  import autores from "../../constants/autores.js";
  import ItemAutor from "../../components/autor/ItemAutor.svelte";
  import Titulo from "../../components/shared/Titulo.svelte";
</script>

<div class="flex flex-col gap-10 px-5">
  <Titulo
    principal="Autores"
    secundario="Conheça os autores que escrevem as principais histórias que você ama!"
  />

  <!-- A grid se ajusta para exibir entre 1 a 3 colunas, dependendo da largura da tela -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {#each autores as autor}
      <ItemAutor {autor} />
    {/each}
  </div>
</div>

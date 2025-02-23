<script>
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
</div>

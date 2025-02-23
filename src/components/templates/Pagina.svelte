<script>
  import AreaLateral from "./AreaLateral.svelte";
  import Cabecalho from "./Cabecalho.svelte";
  import Main from "./Main.svelte";
  import Rodape from "./Rodape.svelte";
</script>

<div
  class="
          flex flex-col min-h-screen
          bg-black text-white
          "
>
  <Cabecalho />
  <div class="flex flex-1 max-w-7xl gap-5 mx-auto w-full self-center p-5">
    <main class="flex flex-1">
      <Main>
        <slot></slot>
      </Main>
    </main>
    <AreaLateral />
  </div>
  <Rodape />
</div>

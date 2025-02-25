<script>
  import AreaLateral from "./AreaLateral.svelte";
  import Cabecalho from "./Cabecalho.svelte";
  import Main from "./Main.svelte";
  import Menu from "./Menu.svelte";
  import MenuItem from "./MenuItem.svelte";
  import Rodape from "./Rodape.svelte";
</script>

<div
  class="
    flex flex-col min-h-screen
    bg-black text-white dark:bg-black-800
  "
>
  <Cabecalho />

  <div class="lg:hidden bg-black text-white p-5">
    <Menu titulo="Navegação">
      <MenuItem texto="Bíblia" href="/" />
      <MenuItem texto="Contexto Histórico" href="/livros" />
      <MenuItem texto="Anotações" href="/anotacoes" />
    </Menu>
  </div>

  <div class="flex flex-col lg:flex-row flex-1 gap-5 mx-auto w-full p-5">
    <main class="flex flex-1">
      <Main>
        <slot></slot>
      </Main>
    </main>

    <div class="lg:block hidden">
      <AreaLateral />
    </div>
  </div>

  <Rodape />
</div>

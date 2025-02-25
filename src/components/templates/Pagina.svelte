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
    relative
  "
>
  <Cabecalho />

  <div
    class="lg:hidden border-t-2 border-zinc-800 px-1 gap-1 rounded-t-lg list-none text-white p-1 bg-black grid grid-cols-3 fixed z-1 bottom-0 w-full"
  >
    <!-- <Menu titulo="Navegação"> -->
    <MenuItem
      texto="Bíblia"
      icone="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
    />
    <MenuItem
      texto="Estudo"
      icone="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      href="/livros"
    />
    <MenuItem
      texto="Notas"
      icone="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
      href="/anotacoes"
    />
    <!-- </Menu> -->
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

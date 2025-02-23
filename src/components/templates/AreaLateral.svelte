<script>
  import Menu from "./Menu.svelte";
  import MenuItem from "./MenuItem.svelte";
</script>

<aside
  class="flex flex-col self-start gap-10 min-w-72 border border-zinc-800 p-5 rounded-md"
>
  <Menu titulo="Navegação">
    <MenuItem texto="Início" href="/" />
    <MenuItem texto="Livros" href="/livros" />
    <MenuItem texto="Contexto Histórico" href="/" />
    <MenuItem texto="Artigos" href="/" />
  </Menu>
  <Menu titulo="Principais Autores">
    <MenuItem texto="C.S. Lewis" href="/autores/cs-lewis" />
    <MenuItem texto="Tim Keller" href="/autores/tim-keller" />
    <MenuItem texto="John Piper" href="/autores/john-piper" />
  </Menu>
  <Menu titulo="Outras categorias">
    <MenuItem texto="Ultimas notícias" href="/" />
    <MenuItem texto="Séries populares" href="/" />
    <MenuItem texto="Facebook" href="/autores" />
    <MenuItem texto="Instagram" href="/" />
    <MenuItem texto="Youtube" href="/" />
  </Menu>
</aside>

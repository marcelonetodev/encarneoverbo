<script>
  import { page } from "$app/stores";
  import ConteudoLivro from "../../../components/livro/ConteudoLivro.svelte";
</script>

<ConteudoLivro livro={$page.data.livro} />

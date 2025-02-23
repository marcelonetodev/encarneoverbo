<script lang="ts">
  import Botao from "../components/shared/Botao.svelte";

  /** @type {number} */
  export let book: any = null;
  export let texto: any = null;
  export let text: any = null;
  export let verses: any = null;
  export let reference: any = null;
  export let count: any = 1;

  export async function api(livro: any, capitulo: any) {
    const response = await fetch(
      `https://bible-api.com/${livro}+${capitulo}?translation=almeida`
    );
    book = await response.json();
    text = book.text;
    verses = book.verses;
    reference = book.reference;
    count++;
    return { text, verses, reference };
  }
</script>

<Botao {texto} funcao={api} />

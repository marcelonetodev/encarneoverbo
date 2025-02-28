<script lang="ts">
  import Botao from "../components/shared/Botao.svelte";

  /** @type {number} */
  export let book: any = null;
  export let texto: any = null;
  export let text: any = null;
  export let verses: any = null;
  export let reference: any = null;
  export let count: any = 1;
  const link = "https://bible-api.com/"
  export async function api(livro: any, capitulo: any) {
    const response = await fetch(
      `${link}${livro}+${capitulo}?translation=almeida`
    );
    book = await response.json();
    text = book.text;
    verses = book.verses;
    reference = book.reference;
    count++;
    return { text, verses, reference };
  }
  export async function versiculoAleatorio(){
    const response = await fetch(
      `${link}/data/almeida/random`);
      book = await response.json();
      book = book.random_verse
      verses = book.text
      reference = `${book.book} ${book.chapter}:${book.verse}`
      return { book, verses, reference };
    
  }
</script>

<Botao {texto} funcao={api} />

<Botao {texto} funcao={versiculoAleatorio} />
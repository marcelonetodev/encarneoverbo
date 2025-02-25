<script lang="ts">
  import Botao from "../../components/shared/Botao.svelte";
  import Markdown from "../../components/shared/Markdown.svelte";
  import Texto from "../../components/shared/Texto.svelte";
  import Titulo from "../../components/shared/Titulo.svelte";
  import livros from "../../constants/livros";

  export let book: any = null;
  export let text: any = null;
  export let verses: any = null;
  export let reference: any = null;
  export let count: any = 1;
  let selectedBook: string | null = null;

  async function api(lv: any, cap: any) {
    const response = await fetch(
      `https://bible-api.com/${lv}+${cap}?translation=almeida`
    );
    book = await response.json();
    text = book.text;
    verses = book.verses;
    reference = book.reference;
    count++;
    window.scrollTo(0, 0);
  }

  function handleBookSelection(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    selectedBook = selectElement.value;
  }

  function copiarTexto() {
    const textoParaCopiar = text || "Texto não disponível.";
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
      alert("Texto copiado para a área de transferência!");
    });
  }
</script>

<div class="flex flex-col gap-10">
  <Titulo
    principal="Anotações"
    secundario="Fique livre para escrever suas ideias."
  />
  <Markdown />
</div>

<script lang="ts">
  import Botao from "../shared/Botao.svelte";
  import Titulo from "../shared/Titulo.svelte";
  export let livro: any = null;

  /** @type {number} */
  export let book: any = null;
  export let text: any = null;
  export let verses: any = null;
  export let chapter: any = null;
  export let reference: any = null;
  export let count: any = 1;

  async function api() {
    const response = await fetch(
      `https://bible-api.com/${livro.id}+${count}?translation=almeida`
    );
    book = await response.json();
    text = book.text;
    verses = book.verses.text;
    chapter = book.verses.chapter;
    reference = book.reference;
    console.log(chapter, reference);
    count++;
  }
</script>

{#if livro}
  <div class="flex flex-col gap-5">
    <img
      src={livro.imagem}
      alt={livro.titulo}
      class="h-96 object-cover rounded-md"
    />
    <article>
      <Titulo principal={livro.titulo} secundario={livro.descricao} />
      <div>
        <p class="font-light text-sm p-10">
          O livro de {livro.titulo} foi escrito por {livro.autor}, {livro.ano}.
          Possui {livro.capitulo} capítulos e {livro.versiculo} versículos. {livro.contexto_historico}
        </p>
      </div>
      <div class="gap-5 flex flex-col">
        <Titulo principal={reference} />
        <span class="border-b border border-zinc-800"></span>

        <!-- {#if book === null}
          <Botao texto="{livro.titulo} 1" funcao={api} />
        {/if} -->

        {#if book !== null}
          <div class="flex border border-zinc-800 rounded-md gap-5">
            <p class="p-5">{text}</p>
          </div>
          <!-- {#each verses as verse}
    <p>{verses.text}</p>
  {/each} -->
        {/if}
        <Botao texto="Ir para {livro.titulo} {count}" funcao={api} />
      </div>
      <!-- <div class="flex flex-col p-5">
        <Titulo principal="Capítulos" />
        <div class="flex grid grid-10 gap-5">
          <Botao texto="1" funcao={api} />
        </div>
      </div> -->
    </article>
  </div>
{/if}

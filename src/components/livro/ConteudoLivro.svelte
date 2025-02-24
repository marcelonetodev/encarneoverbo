<!-- <script lang="ts">
  import livros from "../../constants/livros";
  import Botao from "../shared/Botao.svelte";
  import Titulo from "../shared/Titulo.svelte";
  import Texto from "../shared/Texto.svelte";
  export let livro: any = null;

  /** @type {number} */
  export let book: any = null;
  export let text: any = null;
  export let verses: any = null;
  export let chapter: any = null;
  export let reference: any = null;
  export let count: any = 1;

  async function api(capitulo = count) {
    const response = await fetch(
      `https://bible-api.com/${livro.id}+${capitulo}?translation=almeida`
    );
    book = await response.json();
    text = book.text;
    verses = book.verses;
    reference = book.reference;
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
      <Titulo
        principal="Livro de {livro.titulo}"
        secundario={livro.descricao}
      />
      <div>
        <Texto
          texto="          O livro de {livro.titulo} foi escrito por {livro.autor}, {livro.ano}.
          Possui {livro.capitulo} capítulos e {livro.versiculo} versículos. {livro.contexto_historico}
"
        />
        <Titulo principal="Contexto geral" />
        <Texto textoMarkdown={livro.contexto} />
      </div>
      <div class="gap-5 flex flex-col">
        <Titulo principal={reference} />
        {#if book !== null}
          <Texto texto={text} />
        {/if}
        <span class="border-b border border-zinc-800"></span>
        <Titulo principal="Capítulos" />
        <div class="justify-center flex p-5">
          <div class="grid grid-cols-10 gap-4">
            {#each { length: livro.capitulo }, cap}
              <Botao texto={cap + 1} funcao={() => api(cap + 1)} />
            {/each}
          </div>
        </div>
      </div>
    </article>
  </div>
{/if} -->

<script lang="ts">
  import livros from "../../constants/livros";
  import Botao from "../shared/Botao.svelte";
  import Titulo from "../shared/Titulo.svelte";
  import Texto from "../shared/Texto.svelte";
  export let livro: any = null;

  /** @type {number} */
  export let book: any = null;
  export let text: any = null;
  export let verses: any = null;
  export let chapter: any = null;
  export let reference: any = null;
  export let count: any = 1;

  async function api(capitulo = count) {
    const response = await fetch(
      `https://bible-api.com/${livro.id}+${capitulo}?translation=almeida`
    );
    book = await response.json();
    text = book.text;
    verses = book.verses;
    reference = book.reference;
    count++;
    window.scrollTo(0, 0);
  }
</script>

{#if livro}
  <div class="flex flex-col gap-5 max-w-7xl mx-auto p-4">
    <img
      src={livro.imagem}
      alt={livro.titulo}
      class="w-full h-72 sm:h-96 object-cover rounded-md"
    />
    <article>
      <Titulo
        principal="Livro de {livro.titulo}"
        secundario={livro.descricao}
      />
      <div>
        <Texto
          texto="O livro de {livro.titulo} foi escrito por {livro.autor}, {livro.ano}.
          Possui {livro.capitulo} capítulos e {livro.versiculo} versículos. {livro.contexto_historico}"
        />
        <Titulo principal="Contexto geral" />
        <Texto textoMarkdown={livro.contexto} />
      </div>
      <div class="gap-5 flex flex-col">
        <Titulo principal={reference} />
        {#if book !== null}
          <Texto texto={text} />
        {/if}
        <span class="border-b border-zinc-800"></span>
        <Titulo principal="Capítulos" />
        <div class="flex justify-center p-5">
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {#each { length: livro.capitulo }, cap}
              <Botao texto={cap + 1} funcao={() => api(cap + 1)} />
            {/each}
          </div>
        </div>
      </div>
    </article>
  </div>
{/if}

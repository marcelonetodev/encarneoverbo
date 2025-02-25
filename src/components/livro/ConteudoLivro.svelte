<script lang="ts">
  import Botao from "../shared/Botao.svelte";
  import Titulo from "../shared/Titulo.svelte";
  import Texto from "../shared/Texto.svelte";
  export let livro: any = null;

  /** @type {number} */
  export let book: any = null;
  export let text: any = null;
  export let verses: any = null;
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
    // window.scrollTo(0, 0);
  }

  function copiarTexto() {
    const textoParaCopiar = text || "Texto não disponível.";
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
      alert("Texto copiado para a área de transferência!");
    });
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
          textoSB="O livro de {livro.titulo} foi escrito por {livro.autor}, {livro.ano}.
          Possui {livro.capitulo} capítulos e {livro.versiculo} versículos. {livro.contexto_historico}"
        />
        <Titulo principal="Contexto geral" />
        <Texto textoMarkdown={livro.contexto} />
      </div>
      <div class="gap-5 flex flex-col">
        {#if book !== null}
          <Titulo principal={reference} />
          <div class="relative border border-zinc-800 rounded-md gap-5">
            <button
              class="bg-zinc-800/20 text-white/20 px-2 py-1 text-sm hover:bg-zinc-800 focus:outline-none absolute top-0 right-0 cursor-pointer"
              on:click={copiarTexto}
              title="Copiar Texto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>
            </button>
            {#each verses as verse, index}
              <Texto versiculo={verse.text} index={verse.verse} />
            {/each}
          </div>
        {/if}
        <div class="flex flex-col p-5">
          <span class="border-b border border-zinc-800"></span>
          <Titulo principal="Capítulos" />
          <div class="relative flex justify-center p-5">
            <div
              class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
            >
              {#each { length: livro.capitulo }, cap}
                <Botao texto={cap + 1} funcao={() => api(cap + 1)} />
              {/each}
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
{/if}

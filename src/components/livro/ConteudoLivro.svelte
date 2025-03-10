<script lang="ts">
  import Botao from "../shared/Botao.svelte";
  import Titulo from "../shared/Titulo.svelte";
  import Texto from "../shared/Texto.svelte";
  import CopiarTexto from "../shared/CopiarTexto.svelte";
  import Salvar from "../shared/Salvar.svelte";
  import json from "../../json/json";
  export let livro: any = null;
  let printTraduction: any = null;
  const traducoes = [
    "ACF",
    "ARA",
    "ARC",
    "AS21",
    "JFAA",
    "KJA",
    "KJF",
    "NAA",
    "NBV",
    "NTLH",
    "NVI",
    "NVT",
    "TB",
  ];
  let selectedTraduction: string | null = null;

  /** @type {number} */
  export let book: any = null;
  export let text: any = null;
  export let capit: any = null;
  export let verses: any = null;
  export let reference: any = null;

  async function chamarJson(tipo: any, livro: any, capitulo: any) {
    capit = capitulo
    if (!tipo) {
      selectedTraduction = "NVT";
      tipo = "NVT";
    }
    book = await json(tipo, livro, capitulo);
    Promise.resolve(book).then((value) => {
      text = value.text;
      verses = value.verses;
      reference = value.reference;
    });
    printTraduction = `Tradução: ${tipo}`;
  }

  async function handleTraductionSelection(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    selectedTraduction = selectElement.value;
  }
</script>

{#if livro}
  <div class="flex flex-col gap-5 max-w-7xl mx-auto p-4">
    <!-- <img
      src={livro.imagem}
      alt={livro.titulo}
      class="w-full h-72 object-cover sm:h-96 rounded-sm"
    /> -->
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
          <Titulo principal={reference} secundario={printTraduction} />
          <div
            class="relative md:border lg:border-zinc-300 dark:lg:border-zinc-950 lg:rounded-sm gap-5 lg:p-5"
          >
            {#each verses as verse, index}
              <div class="relative my-3">
                <Salvar
                  text={verse}
                  verse={index + 1}
                  {reference}
                  traducao={selectedTraduction}
                  autor={null}
                  citacao={null}
                />
                <CopiarTexto
                  text={verse}
                  verse={index + 1}
                  {reference}
                  traducao={selectedTraduction}
                  citacao={null}
                  autor={null}
                />
                <Texto versiculo={verse} index={index + 1} />
              </div>
            {/each}
          </div>
          <div class="flex justify-around">

            {#if capit != null && capit >= 1}
              <Botao
                texto="Capítulo Anterior"
                funcao={() => chamarJson(selectedTraduction, livro.n, capit - 1)}
              />
            {/if}
            {#if capit != null && capit + 1 < livro.capitulo }
              <Botao
                texto="Próximo Capítulo"
                funcao={() => chamarJson(selectedTraduction, livro.n, capit + 1)}
              />
            {/if}
          </div>
            {/if}
        <div class="flex flex-col p-5">
          <!-- <span class="border-b border border-zinc-800"></span> -->
          <div class="flex justify-center">
            <select
              class=" placeholder:text-zinc-950 pl-5 pr-8 py-2 transition duration-300 ease focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer p-4 font-light border border-zinc-300 dark:border-zinc-800/80 flex-1 rounded-sm text-zinc-400 bg-zinc-300 dark:bg-zinc-950 focus:outline-none dark:focus:ring-2 dark:focus:ring-zinc-800 w-full"
              on:change={handleTraductionSelection}
            >
              <option class="bg-zinc-950" selected>Versão</option>
              {#each traducoes as traducao}
                <option class="bg-zinc-950" value={traducao}>{traducao}</option>
              {/each}
            </select>
          </div>
          <Titulo principal="Capítulos" />
          <div class="relative flex justify-center p-5">
            <div
              class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
            >
              {#each { length: livro.capitulo }, cap}
                <Botao
                  texto={cap + 1}
                  funcao={() => chamarJson(selectedTraduction, livro.n, cap)}
                />
              {/each}
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
{/if}

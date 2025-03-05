<script lang="ts">
  import { onMount } from "svelte";
  import { api, randomApi } from "../../api/api";
  import Botao from "../../components/shared/Botao.svelte";
  import CopiarTexto from "../../components/shared/CopiarTexto.svelte";
  import Salvar from "../../components/shared/Salvar.svelte";
  import Texto from "../../components/shared/Texto.svelte";
  import Titulo from "../../components/shared/Titulo.svelte";
  import livros from "../../constants/livros";
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
  import json from "../../json/json";

  export let book: any = null;
  export let bookRandom: any = null;
  export let text: any = null;
  export let verses: any = null;
  export let reference: any = null;
  let selectedBook: string | null = null;
  let printTraduction: string | null = null;

  onMount(() => {
    chamarRandomApi();
  });

  async function chamarJson(tipo: any, livro: any, capitulo: any) {
    book = await json(tipo, livro, capitulo);
    Promise.resolve(book).then((value) => {
      text = value.text;
      verses = value.verses;
      reference = value.reference;
    });
    tipo
      ? (printTraduction = `Tradução: ${tipo}`)
      : (printTraduction = `Tradução: NVT`);
  }
  // async function chamarApi(livro: any, capitulo: any) {
  //   book = await api(livro, capitulo);
  //   Promise.resolve(book).then((value) => {
  //     text = value.text;
  //     verses = value.verses;
  //     reference = value.reference;
  //   });
  // }
  async function chamarRandomApi() {
    bookRandom = await randomApi();
    Promise.resolve(bookRandom).then((value) => {
      verses = value.text;
      reference = `${value.book} ${value.chapter}:${value.verse} ARA`;
    });
  }
  async function handleBookSelection(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    selectedBook = selectElement.value;
  }
  async function handleTraductionSelection(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    selectedTraduction = selectElement.value;
  }
</script>

<div class="flex flex-col gap-10 lg:px-5">
  <Titulo
    before="Bíblia do"
    key="Verbo"
    after="No silêncio das palavras, ecoa a verdade que liberta."
  />
  <!-- after="A Bíblia não é apenas um livro de instruções; é o livro que nos revela Cristo. Quando lemos a Bíblia, vemos a face de Jesus em cada página. — Billy Graham" -->
  {#if book !== null}
    <Titulo principal={reference} secundario={printTraduction} />
    <div class="lg:border lg:border-zinc-950 lg:rounded-sm gap-5 lg:p-3">
      {#each verses as verse, index}
        <div class="relative my-3">
          <Salvar
            text={verse}
            verse={index + 1}
            {reference}
            id={null}
            autor={null}
            citacao={null}
          />
          <CopiarTexto
            text={verse}
            verse={index + 1}
            {reference}
            id={null}
            citacao={null}
            autor={null}
          />
          <Texto versiculo={verse} index={index + 1} />
        </div>
      {/each}
    </div>
  {:else if bookRandom && !book}
    <div class="relative my-3">
      <Salvar
        text={verses}
        {reference}
        verse={null}
        id={null}
        autor={null}
        citacao={null}
      />
      <CopiarTexto
        text={verses}
        {reference}
        verse={null}
        id={null}
        citacao={null}
        autor={null}
      />
      <Texto versiculo={verses} autor={reference} />
    </div>
  {/if}

  <div class="flex justify-center">
    <select
      class=" placeholder:text-zinc-950 pl-5 pr-8 py-2 transition duration-300 ease focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer p-4 font-light border border-zinc-800/80 rounded-bl-sm rounded-tl-sm text-zinc-400 bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-800 w-24"
      on:change={handleTraductionSelection}
    >
      <option class="bg-zinc-950" selected>---</option>
      {#each traducoes as traducao}
        <option class="bg-zinc-950" value={traducao}>{traducao}</option>
      {/each}
    </select>
    <select
      class=" placeholder:text-zinc-950 pl-5 pr-8 py-2 transition duration-300 ease focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer flex-1 p-4 font-light border border-zinc-800/80 rounded-br-sm rounded-tr-sm text-zinc-400 bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-800 w-full"
      on:change={handleBookSelection}
    >
      <option class="bg-zinc-950" selected>Livros da bíblia</option>
      {#each livros as lv}
        <option class="bg-zinc-950" value={lv.titulo}>{lv.titulo}</option>
      {/each}
    </select>
  </div>

  {#if selectedBook !== null}
    {#each livros as lv}
      {#if lv.titulo === selectedBook}
        <div class="gap-5 flex flex-col">
          <Titulo principal={lv.titulo} secundario="Escolha o capítulo" />
          <div class="justify-center flex p-5" id="cap">
            <div
              class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
            >
              {#each { length: lv.capitulo }, cap}
                <Botao
                  texto={cap + 1}
                  funcao={() => chamarJson(selectedTraduction, lv.n, cap)}
                />
              {/each}
            </div>
          </div>
        </div>
      {/if}
    {/each}
  {/if}
</div>

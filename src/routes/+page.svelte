<script lang="ts">
  import api from '../api/api'
  import Botao from "../components/shared/Botao.svelte";
  import CopiarTexto from "../components/shared/CopiarTexto.svelte";
    import Salvar from '../components/shared/Salvar.svelte';
  import Texto from "../components/shared/Texto.svelte";
  import Titulo from "../components/shared/Titulo.svelte";
  import livros from "../constants/livros";

  export let book: any = null;
  export let text: any = null;
  export let verses: any = null;
  export let reference: any = null;
  let selectedBook: string | null = null;

  async function chamarApi(livro:any, capitulo:any){
    book = api(livro, capitulo)
    Promise.resolve(book).then(
  (value) => {
    text = value.text;
    verses = value.verses;
    reference = value.reference;
  },)    
}
  function handleBookSelection(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    selectedBook = selectElement.value;
  }

</script>

<div class="flex flex-col gap-10">
  <Titulo
    before="Encarne o"
    key="Verbo"
    after="No coração da palavra, onde a essência da alma se encontra com a arte do verbo, há um convite único, irresistível."
  />
  <Texto
    img="https://img.freepik.com/fotos-premium/cristo-com-os-discipulos-ia-generativa_225446-5263.jpg"
    textoSB="No princípio, antes do tempo, Ele já era. O Verbo, eterno e imutável, habitava o infinito, onde palavras não eram apenas sons, mas a essência de tudo que existe. Era a voz que ecoava no silêncio do universo, o sopro que sustentava a criação, o pensamento que movia as estrelas."
    descricaoImg="Encarne o Verbo!"
  />
  <Titulo
    principal=" Livros da Bíblia"
    secundario="Escolha o livro da bíblia abaixo."
  />

  {#if book !== null}
    <Titulo principal={reference} />
    <div class="border border-zinc-800 rounded-md gap-5 p-3">
      {#each verses as verse, index}
      <div class="relative">
        <Salvar text={verse.text} verse={verse.verse} reference={reference} />
        <CopiarTexto text={verse.text} verse={verse.verse} reference={reference} />
        <Texto versiculo={verse.text} index={verse.verse} />
      </div>
      {/each}
    </div>
  {/if}

  <div class="flex justify-center">
    <select
      class=" placeholder:text-slate-40 pl-5 pr-8 py-2 transition duration-300 ease focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer flex-1 p-4 font-light border border-zinc-800 rounded-md bg-transparent text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-800"
      on:change={handleBookSelection}
    >
      <option class="bg-black" selected>Escolha o livro</option>
      {#each livros as lv}
        <option class="bg-black" value={lv.titulo}>{lv.titulo}</option>
      {/each}
    </select>
  </div>

  {#if selectedBook !== null}
    {#each livros as lv}
      {#if lv.titulo === selectedBook}
        <div class="gap-5 flex flex-col">
          <Titulo principal={lv.titulo} secundario="Escolha qual o capítulo" />
          <div class="justify-center flex p-5" id="cap">
            <div
              class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
            >
              {#each { length: lv.capitulo }, cap}
                <Botao texto={cap + 1} funcao={() => chamarApi(lv.id, cap + 1)} />
              {/each}
            </div>
          </div>
        </div>
      {/if}
    {/each}
  {/if}
</div>

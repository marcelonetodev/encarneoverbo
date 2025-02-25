<script lang="ts">
  import Botao from "../components/shared/Botao.svelte";
  import Texto from "../components/shared/Texto.svelte";
  import Titulo from "../components/shared/Titulo.svelte";
  import livros from "../constants/livros";

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
    before="Encarne o"
    key="verbo"
    after="No coração da palavra, onde a essência da alma se encontra com a arte do verbo, há um convite único, irresistível."
  />
  <Texto
    img="https://img.freepik.com/fotos-premium/cristo-com-os-discipulos-ia-generativa_225446-5263.jpg"
    textoSB="No princípio, antes do tempo, Ele já era. O Verbo, eterno e imutável, habitava o infinito, onde palavras não eram apenas sons, mas a essência de tudo que existe. Era a voz que ecoava no silêncio do universo, o sopro que sustentava a criação, o pensamento que movia as estrelas."
    descricaoImg="Encarne o Verbo!"
  />
  <Titulo
    principal=" Livros da Bíblia"
    secundario="Todos os livros da bíblia ao seu alcance."
  />

  {#if book !== null}
    <Titulo principal={reference} />
    <div class="relative border border-zinc-800 rounded-md gap-5 p-3">
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

  <div class="flex justify-center">
    <select
      class=" placeholder:text-slate-40 pl-5 pr-8 py-2 transition duration-300 ease focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer flex-1 p-4 font-light border border-zinc-800 rounded-md bg-transparent text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-800"
      on:change={handleBookSelection}
    >
      {#each livros as lv}
        <option class="bg-black" value={lv.titulo}>{lv.titulo}</option>
      {/each}
    </select>
  </div>

  {#if selectedBook !== null}
    {#each livros as lv}
      {#if lv.titulo === selectedBook}
        <div class="gap-5 flex flex-col">
          <Titulo principal={lv.titulo} secundario="Capítulos" />
          <div class="justify-center flex p-5" id="cap">
            <div
              class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
            >
              {#each { length: lv.capitulo }, cap}
                <Botao texto={cap + 1} funcao={() => api(lv.titulo, cap + 1)} />
              {/each}
            </div>
          </div>
        </div>
      {/if}
    {/each}
  {/if}
</div>

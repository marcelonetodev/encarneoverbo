<!-- <script>
  import livros from "../../constants/livros.js";
  import ItemLivro from "../../components/livro/ItemLivro.svelte";
  import Titulo from "../../components/shared/Titulo.svelte";
</script>

<div class="flex flex-col gap-10 px-5">
  <Titulo
    principal="Estudo da bíblia"
    secundario="Conheça o contexto histórico ao passo que você estuda sobre a bíblia!"
  />

  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
  >
    {#each livros as livro}
      <ItemLivro {livro} />
    {/each}
  </div>
</div> -->

<script lang="ts">
  import livros from "../../constants/livros.js";
  import Titulo from "../../components/shared/Titulo.svelte";
  import Citacao from "../../components/shared/Citacao.svelte";
  import Play from "../../components/shared/Play.svelte";
  let selectedBook: string | null = null;

  async function handleBookSelection(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    selectedBook = selectElement.value;
    for (let livro of livros) {
      console.log(selectedBook);
      console.log(livro.id);
      if (selectedBook == livro.id) {
        window.location.href = `/livros/${livro.id}`;
      }
    }
  }
</script>

<div class="flex flex-col gap-10 lg:px-5">
  <Titulo
    before="Estudo do"
    key="Verbo"
    after="Onde o estudo encontra a luz, a alma se transforma."
  />
  <!-- after="Estude com sabedoria, anote com propósito, viva a palavra." -->

  <!-- after="A Bíblia é a mente de Cristo revelada. Ela nos ensina não apenas sobre Ele, mas nos leva a Ele, para que possamos conhecê-Lo e viver como Ele vive. — Charles Spurgeon" -->
  <Citacao />
  <select
    on:change={handleBookSelection}
    id="livro-select"
    name="livros"
    class=" placeholder:text-slate-40 pl-5 pr-8 py-2 transition duration-300 ease focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer flex-1 p-4 font-light border border-zinc-800/80 rounded-sm bg-zinc-950 text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-800"
  >
    <option class="bg-zinc-900" selected>Livro</option>
    {#each livros as b}
      <option class="bg-zinc-900" value={b.id}>{b.titulo}</option>
    {/each}
  </select>
</div>

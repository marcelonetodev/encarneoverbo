<!-- <script>
    import biblia from "../../constants/livros.js";
    import Titulo from "../../components/shared/Titulo.svelte";
    import ItemBiblia from "../../components/biblia/ItemBiblia.svelte";
</script>

<div class="flex flex-col gap-10 px-5">
    <Titulo
        principal="Bíblia"
        secundario="Escolha qual livro você quer ler"
        />

    <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
    >
        {#each biblia as b}
            <ItemBiblia biblia={b} />
        {/each}
    </div>
</div> -->

<script lang="ts">
    import api from "../../api/api";
    import Botao from "../../components/shared/Botao.svelte";
    import CopiarTexto from "../../components/shared/CopiarTexto.svelte";
    import Salvar from "../../components/shared/Salvar.svelte";
    import Texto from "../../components/shared/Texto.svelte";
    import Titulo from "../../components/shared/Titulo.svelte";
    import livros from "../../constants/livros";

    

  export let book: any = null;
  export let text: any = null;
  export let verses: any = null;
  export let reference: any = null;
  let selectedBook: string | null = null;

  async function chamarApi(livro: any, capitulo: any) {
    book = await api(livro, capitulo);
    Promise.resolve(book).then((value) => {
      text = value.text;
      verses = value.verses;
      reference = value.reference;
    });
  }
  async function handleBookSelection(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    selectedBook = selectElement.value;
  }
</script>

<div class="flex flex-col gap-10 px-5">
    <Titulo principal="Bíblia" secundario="Escolha qual livro você quer ler" />
  {#if book !== null}
    <Titulo principal={reference} />
    <div class="border border-zinc-800 rounded-md gap-5 p-3">
      {#each verses as verse, index}
        <div class="relative">
          <Salvar text={verse.text} verse={verse.verse} {reference} id={verse.book_id}/>
          <CopiarTexto text={verse.text} verse={verse.verse} {reference}  id={verse.book_id} />
          <Texto versiculo={verse.text} index={verse.verse} />
        </div>
      {/each}
    </div>
  {/if} 

 <div class="flex justify-c0enter">
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
                <Botao
                  texto={cap + 1}
                  funcao={() => chamarApi(lv.id, cap + 1)}
                />
              {/each}
            </div>
          </div>
        </div>
      {/if}
    {/each}
  {/if}

</div>
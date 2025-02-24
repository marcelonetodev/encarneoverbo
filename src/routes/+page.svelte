<!-- <script lang="ts">
  import Botao from "../components/shared/Botao.svelte";
  import Markdown from "../components/shared/Markdown.svelte";
  import Texto from "../components/shared/Texto.svelte";
  import Titulo from "../components/shared/Titulo.svelte";
  import livros from "../constants/livros";

  export let book: any = null;
  export let text: any = null;
  export let reference: any = null;
  export let count: any = 1;

  async function api(lv: any, cap: any) {
    const response = await fetch(
      `https://bible-api.com/${lv}+${cap}?translation=almeida`
    );
    book = await response.json();
    text = book.text;
    reference = book.reference;
    count++;
    window.scrollTo(0, 0);
  }
</script>

<div class="flex flex-col gap-10">
  <Texto
    texto="Bem-vindo ao encarne o verbo!
Aqui você tem acesso a todos os livros da Bíblia de maneira prática e rápida. Explore passagens, capítulos e versículos de forma simples, facilitando seu estudo e meditação. Seja você um devoto em busca de inspiração diária ou alguém que deseja se aprofundar no conhecimento bíblico, nosso site está aqui para ajudar. Navegue e descubra o poder transformador da Palavra!"
  />
  <Titulo
    principal="Anotações"
    secundario="Fique livre para escrever suas ideias."
  />
  <Markdown />
  <Titulo
    principal="Bíblia"
    secundario="Todos os livros da bíblia ao seu alcance."
  />
  {#if book !== null}
    <Titulo principal={reference} />
    <Texto texto={text} />
  {/if}
  {#each livros as lv}
    <span class="border-b border border-zinc-800"></span>
    <div class="gap-5 flex flex-col">
      <Titulo principal={lv.titulo} />
      <div class="justify-center flex p-5" id="cap">
        <div class="grid grid-cols-10 gap-4">
          {#each { length: lv.capitulo }, cap}
            <Botao texto={cap + 1} funcao={() => api(lv.titulo, cap + 1)} />
          {/each}
        </div>
      </div>
    </div>
  {/each}
</div> -->

<script lang="ts">
  import Botao from "../components/shared/Botao.svelte";
  import Markdown from "../components/shared/Markdown.svelte";
  import Texto from "../components/shared/Texto.svelte";
  import Titulo from "../components/shared/Titulo.svelte";
  import livros from "../constants/livros";

  export let book: any = null;
  export let text: any = null;
  export let reference: any = null;
  export let count: any = 1;
  let selectedBook: string | null = null;

  async function api(lv: any, cap: any) {
    const response = await fetch(
      `https://bible-api.com/${lv}+${cap}?translation=almeida`
    );
    book = await response.json();
    text = book.text;
    reference = book.reference;
    count++;
    window.scrollTo(0, 0);
  }

  function handleBookSelection(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    selectedBook = selectElement.value;
  }
</script>

<div class="flex flex-col gap-10">
  <Texto
    texto="Bem-vindo ao encarne o verbo!
Aqui você tem acesso a todos os livros da Bíblia de maneira prática e rápida. Explore passagens, capítulos e versículos de forma simples, facilitando seu estudo e meditação. Seja você um devoto em busca de inspiração diária ou alguém que deseja se aprofundar no conhecimento bíblico, nosso site está aqui para ajudar. Navegue e descubra o poder transformador da Palavra!"
  />
  <Titulo
    principal="Anotações"
    secundario="Fique livre para escrever suas ideias."
  />
  <Markdown />
  <Titulo
    principal="Bíblia"
    secundario="Todos os livros da bíblia ao seu alcance."
  />

  {#if book !== null}
    <Titulo principal={reference} />
    <Texto texto={text} />
  {/if}

  <!-- Menu suspenso para selecionar o livro -->
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
          <Titulo principal={lv.titulo} />
          <div class="justify-center flex p-5" id="cap">
            <div class="grid grid-cols-10 gap-4">
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

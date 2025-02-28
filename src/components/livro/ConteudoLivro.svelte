<script lang="ts">
  import Botao from "../shared/Botao.svelte";
  import Titulo from "../shared/Titulo.svelte";
  import Texto from "../shared/Texto.svelte";
  import CopiarTexto from "../shared/CopiarTexto.svelte";
  import api from "../../api/api";
  import Salvar from "../shared/Salvar.svelte";
  export let livro: any = null;

  /** @type {number} */
  export let book: any = null;
  export let text: any = null;
  export let verses: any = null;
  export let reference: any = null;

  async function chamarApi(livro: any, capitulo: any) {
    book = await api(livro, capitulo);
    Promise.resolve(book).then((value) => {
      text = value.text;
      verses = value.verses;
      reference = value.reference;
    });
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
          <Titulo principal={reference} secundario="Almeida revista e atualizada (ARA)"/>
          <div class="relative md:border lg:border-zinc-950 lg:rounded-sm gap-5 lg:p-5">
            {#each verses as verse, index}
              <div class="relative my-3">
                <Salvar text={verse.text} verse={verse.verse} {reference} id={verse.book_id} autor={null} citacao={null}/>
                <CopiarTexto
                  text={verse.text}
                  verse={verse.verse}
                  {reference}
                  id={verse.book_id}
                  citacao={null}
                  autor={null}
                />
                <Texto versiculo={verse.text} index={verse.verse} />
              </div>
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
                <Botao
                  texto={cap + 1}
                  funcao={() => chamarApi(livro.id, cap + 1)}
                />
              {/each}
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
{/if}

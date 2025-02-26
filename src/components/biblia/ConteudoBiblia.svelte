<script lang="ts">
    import Botao from "../shared/Botao.svelte";
    import Titulo from "../shared/Titulo.svelte";
    import Texto from "../shared/Texto.svelte";
    import CopiarTexto from "../shared/CopiarTexto.svelte";
    import api from "../../api/api";
    import Salvar from "../shared/Salvar.svelte";
    export let biblia: any = null;
  
    /** @type {number} */
    export let book: any = null;
    export let text: any = null;
    export let verses: any = null;
    export let reference: any = null;
  
    async function chamarApi(livro: any, capitulo: any) {
      book = api(livro, capitulo);
      Promise.resolve(book).then((value) => {
        text = value.text;
        verses = value.verses;
        reference = value.reference;
      });
    }
  </script>
  
  {#if biblia}
    <div class="flex flex-col gap-5 max-w-7xl mx-auto p-4">
      <article>
        <Titulo
          principal="Livro de {biblia.titulo}"
        />
        <div class="gap-5 flex flex-col">
          {#if book !== null}
            <Titulo principal={reference} />
            <div class="relative border border-zinc-800 rounded-md gap-5 p-5">
              {#each verses as verse, index}
                <div class="relative">
                  <Salvar text={verse.text} verse={verse.verse} {reference} id={verse.book_id}/>
                  <CopiarTexto
                    text={verse.text}
                    verse={verse.verse}
                    {reference}
                    id={verse.book_id}
                  />
                  <Texto versiculo={verse.text} index={verse.verse} />
                </div>
              {/each}
            </div>
          {/if}
          <div class="flex flex-col p-5">
            <div class="relative flex justify-center p-5">
              <div
                class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
              >
                {#each { length: biblia.capitulo }, cap}
                  <Botao
                    texto={cap + 1}
                    funcao={() => chamarApi(biblia.id, cap + 1)}
                  />
                {/each}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  {/if}
  

<script lang="ts">
    import Botao from "../shared/Botao.svelte";
    import Titulo from "../shared/Titulo.svelte";
    import Texto from "../shared/Texto.svelte";
    import CopiarTexto from "../shared/CopiarTexto.svelte";
    // import {api} from "../../api/api";
    import Salvar from "../shared/Salvar.svelte";
    export let biblia: any = null;
  
    /** @type {number} */
    // export let book: any = null;
    // export let text: any = null;
    // export let verses: any = null;
    // export let reference: any = null;
  
  </script>
  
  {#if biblia}
    <div class="flex flex-col gap-5 max-w-7xl mx-auto p-4">
      <article>
        <Titulo
          principal="Livro de {biblia.titulo}"
        />
      </article>
    </div>
  {/if}
  

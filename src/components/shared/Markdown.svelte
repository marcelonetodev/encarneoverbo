<script lang="ts">
  import { marked } from "marked";
  import Botao from "./Botao.svelte";

  let mensagemA: string[] = [];
  export let maxAnotacoes: number = 20;
  let markdown: string = "";

  import { onMount } from "svelte";

  function verificar(aux: string): boolean {
    return localStorage.getItem(aux) ? true : false;
  }

  onMount(() => {
    let index = 0;
    for (let i = 0; i < maxAnotacoes; i++) {
      let aux = i.toString();
      if (verificar(aux)) {
        mensagemA[index] = localStorage.getItem(aux) || "";
        index++;
      }
    }
  });

  function setar() {
    let novaMensagem = markdown;
    for (let i = 0; i < maxAnotacoes; i++) {
      let aux = i.toString();
      if (!verificar(aux)) {
        localStorage.setItem(aux, novaMensagem);
        mensagemA = [...mensagemA, novaMensagem];
        break;
      }
    }
    markdown = "";
  }

  function apagar(index: number) {
    let aux = index.toString();
    localStorage.removeItem(aux);
    mensagemA = mensagemA.filter((_, i) => i !== index);
  }
</script>

{#if mensagemA.length > 0}
  {#each mensagemA as msg, index}
    <div
      class="flex flex-col border border-zinc-800 justify-around p-5 rounded-md gap-5 text-sm sm:text-base text-justify text-zinc-400"
    >
      <p class="font-semibold text-xl sm:text-3xl">
        Anotação {index + 1}:
      </p>
      <p>{@html marked(msg)}</p>
      <Botao texto="Apagar" funcaoApagar={() => apagar(index)} />
    </div>
  {/each}
{/if}

<div
  class="flex flex-col border border-zinc-800 justify-around p-3 sm:p-5 rounded-md gap-5"
>
  <textarea
    class="p-3 h-36 resize-none outline-none text-sm sm:text-base text-zinc-400 text-justify"
    bind:value={markdown}
    placeholder="Digite sua anotação..."
  ></textarea>
  <Botao funcao={() => setar()} texto="Salvar" />
</div>

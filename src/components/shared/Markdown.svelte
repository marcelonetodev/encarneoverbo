<script lang="ts">
  import { marked } from "marked";
  import Botao from "./Botao.svelte";

  let mensagemA: string[] = [];
  export let maxAnotacoes: number = 30;
  let markdown: string = "";

  import { onMount } from "svelte";

  function verificar(aux: string): boolean {
    return localStorage.getItem(aux) ? true : false;
  }

  function organizar(){
    let index = 0;
    for (let i = 0; i < maxAnotacoes; i++) {
      let aux = i.toString();
      if (verificar(aux)) {
        if(index < localStorage.length){
          mensagemA[index] = localStorage.getItem(aux) || "";
          if(i > index){
            localStorage.setItem(index.toString(), mensagemA[index])
            localStorage.removeItem(aux)
          }
          index++;
        }else{
          break
        }
      }
    }
  }
  onMount(() => {
    organizar()
  });

  function setar() {
    organizar()
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
    organizar()
    let aux = index.toString();
    while(!verificar(aux)){
      index ++
      aux = index.toString()
      if(index > 30){
        break;
      }
    }
    localStorage.removeItem(aux);
    mensagemA = mensagemA.filter((_, i) => i !== index);
    organizar()
  }
</script>

{#if mensagemA.length > 0}
  {#each mensagemA as msg, index}
  <!-- class="flex flex-col border border-zinc-800 justify-around p-5 rounded-md gap-5 text-sm sm:text-base text-justify text-zinc-400" -->
    <div
      class="flex flex-col border border-zinc-800 justify-around p-5 rounded-sm gap-5 text-justify"
    >
      <p class="font-light text-xlsm:text-3xl">
        Gravação {index + 1}:
      </p>
      <p class="bg-zinc-950 rounded-sm p-2">{@html marked(msg)}</p>
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

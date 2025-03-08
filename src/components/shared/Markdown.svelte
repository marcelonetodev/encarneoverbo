<script lang="ts">
  import { marked } from "marked";
  import Botao from "./Botao.svelte";

  let mensagemA: string[] = [];
  export let maxAnotacoes: number = 30;
  let markdown: string = "";
  let adicionar: string = "";
  let check: number;

  import { onMount } from "svelte";

  function verificar(aux: string): boolean {
    return localStorage.getItem(aux) ? true : false;
  }

  function organizar() {
    let index = 0;
    for (let i = 0; i < maxAnotacoes; i++) {
      let aux = i.toString();
      if (verificar(aux)) {
        if (index < localStorage.length) {
          mensagemA[index] = localStorage.getItem(aux) || "";
          if (i > index) {
            localStorage.setItem(index.toString(), mensagemA[index]);
            localStorage.removeItem(aux);
          }
          index++;
        } else {
          break;
        }
      }
    }
  }
  onMount(() => {
    organizar();
  });

  function setar() {
    organizar();
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

  function mesclar(index: number){
    let aux = index.toString()
    if(!adicionar){
      console.log(adicionar)
      adicionar = localStorage.getItem(aux)!
      check = index
    }else if(adicionar && check !== index){
      adicionar = `${adicionar} <br><br> ${localStorage.getItem(aux)}`
      localStorage.removeItem(aux)
      mensagemA = mensagemA.filter((_, i) => i !== index);
      localStorage.removeItem(check.toString())
      mensagemA = mensagemA.filter((_, i) => i !== index);
      organizar()
      markdown = adicionar
      adicionar = ""
      check = index
      setar()
    }else{
      adicionar = ""
      alert("Os valores são iguais")
    }
  }

  function editar(index: number){
    organizar();
    let aux = index.toString();
    while (!verificar(aux)) {
      index++;
      aux = index.toString();
      if (index > 30) {
        break;
      }
    }
    let edit: string
    edit = localStorage.getItem(aux)!
    edit = edit?.toString()
    localStorage.removeItem(aux);
    mensagemA = mensagemA.filter((_, i) => i !== index);
    organizar();
    markdown = edit
  }

  function apagar(index: number) {
    organizar();
    let aux = index.toString();
    while (!verificar(aux)) {
      index++;
      aux = index.toString();
      if (index > 30) {
        break;
      }
    }
    localStorage.removeItem(aux);
    mensagemA = mensagemA.filter((_, i) => i !== index);
    organizar();
  }
</script>

{#if mensagemA.length > 0}
  {#each mensagemA as msg, index}
    <!-- class="flex flex-col border border-zinc-800 justify-around p-5 rounded-md gap-5 text-sm sm:text-base text-justify text-zinc-400" -->
    <div
      class="relative flex flex-col border-4 border-blue-950/30 justify-around p-5 rounded-sm gap-5 text-justify"
    >
      <p class="font-bold text-xl lg:text-3xl text-blue-900">
        Nota {index + 1}:
      </p>
      <p class="bg-zinc-950 text-zinc-500 rounded-sm text-sm p-2">{@html marked(msg)}</p>
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <button
      class="bg-transparent text-red-700/20 hover:text-red-500/70 px-2 py-1 text-sm rounded-tr-md focus:outline-none absolute top-0 right-0 cursor-pointer"
        title="Apagar gravação"
        onclick={() => apagar(index)}
        ><svg
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
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <button
      class="bg-transparent text-green-700/50 hover:text-green-500 px-2 py-1 text-sm focus:outline-none absolute top-0 right-16 cursor-pointer"
      title="Mesclar gravação"
      onclick={() => mesclar(index)}    
    >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
          
    </button>
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <button 
      class="bg-transparent text-zinc-700/50 hover:text-zinc-500 px-2 py-1 text-sm focus:outline-none absolute top-0 right-8 cursor-pointer"
        title="Editar gravação"
        onclick={() => editar(index)}
      
      >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>              
      </button>
    </div>
  {/each}
{/if}

<div
  class="flex flex-col border border-zinc-950 justify-around p-3 sm:p-5 rounded-md gap-5"
>
  <textarea
    class="p-3 h-36 resize-none outline-none text-sm sm:text-base placeholder:text-blue-400/50 text-zinc-400 text-justify"
    bind:value={markdown}
    placeholder="Faça suas anotações..."
  ></textarea>
  <Botao funcao={() => setar()} texto="Salvar" />
</div>

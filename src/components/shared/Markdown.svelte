<!-- <script lang="ts">
  import { marked } from "marked";

  import Botao from "./Botao.svelte";

  export let mensagem: any = "";
  export let mostrar = false;

  export let markdown = "";

  import { onMount } from "svelte";

  onMount(() => {
    mensagem = localStorage.getItem("anotacoes");
    mensagem ? (mostrar = true) : (mostrar = false);
  });
</script>

{#if mostrar}
  <div
    class="resixe-none flex flex-col border border-zinc-800 justify-around p-5 rounded-md gap-5 text-sm/6 text-justify text-zinc-400"
  >
    <p class="font-semibold text-2xl">Mensagem gravada:</p>
    <p>{@html marked(mensagem)}</p>
  </div>
{/if}
<div
  class="flex flex-col border border-zinc-800 justify-around p-3 rounded-md gap-5"
>
  <textarea
    class="p-3 h-36 resize-none outline-none text-sm/ text-zinc-400 text-justify"
    bind:value={markdown}
    placeholder={mensagem}
  ></textarea>

  <Botao
    funcao={() => localStorage.setItem("anotacoes", markdown)}
    texto="Salvar"
  />
</div> -->

<!-- <script lang="ts">
  import { marked } from "marked";

  import Botao from "./Botao.svelte";

  export let mensagemA: any = [];
  export let arrayLocal: any = 10;
  export let mostrar = false;
  export let markdown = "";

  import { onMount } from "svelte";

  onMount(() => {
    let index = 0;
    for (let i = 0; i < arrayLocal; i++) {
      let aux = i.toString();
      if (verificar(aux)) {
        mensagemA[index] = localStorage.getItem(aux);
        index++;
        mostrar = true;
      }
    }
    mostrar = mensagemA.length > 0;
  });

  function verificar(aux: any) {
    return localStorage.getItem(aux) ? true : false;
  }

  function setar() {
    for (let i = 0; i < arrayLocal; i++) {
      let aux = i.toString();
      if (!verificar(aux)) {
        localStorage.setItem(aux, markdown);
        mensagemA.push(markdown); // Atualiza o array de mensagens
        break;
      }
    }
    markdown ? (mostrar = true) : (mostrar = false);
  }

  function apagar(index: any) {
    let aux = index.toString();
    localStorage.removeItem(aux);
    mensagemA = mensagemA.filter((_: any, i: any) => i !== index); // Atualiza o array de mensagens
    mostrar = mensagemA.length > 0; // Atualiza a visibilidade
  }
</script>

{#if mostrar}
  {#each mensagemA as msg, index}
    <div
      id="${index}"
      class="flex flex-col border border-zinc-800 justify-around p-5 rounded-md gap-5 text-sm sm:text-base text-justify text-zinc-400"
    >
      <p class="font-semibold text-2xl sm:text-3xl">
        {index + 1}º anotação:
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
    placeholder={markdown}
  ></textarea>
  <Botao funcaoSalvar={() => setar()} texto="Salvar" />
</div> -->

<script lang="ts">
  import { marked } from "marked";
  import Botao from "./Botao.svelte";

  let mensagemA: string[] = []; // Variável para armazenar as mensagens
  export let maxAnotacoes: number = 20; // Limite de anotações
  let markdown: string = ""; // Variável para armazenar a anotação sendo digitada

  import { onMount } from "svelte";

  // Função que verifica se já existe uma anotação no localStorage
  function verificar(aux: string): boolean {
    return localStorage.getItem(aux) ? true : false;
  }

  // Atualiza a lista de mensagens ao montar o componente
  onMount(() => {
    let index = 0;
    for (let i = 0; i < maxAnotacoes; i++) {
      let aux = i.toString();
      if (verificar(aux)) {
        mensagemA[index] = localStorage.getItem(aux) || ""; // Armazena no array
        index++;
      }
    }
  });

  // Função para salvar a anotação
  function setar() {
    let novaMensagem = markdown; // Captura a nova anotação
    for (let i = 0; i < maxAnotacoes; i++) {
      let aux = i.toString();
      if (!verificar(aux)) {
        localStorage.setItem(aux, novaMensagem); // Salva no localStorage
        mensagemA = [...mensagemA, novaMensagem]; // Atualiza o array reativo de anotações
        break;
      }
    }
    markdown = ""; // Limpa o campo após salvar
  }

  // Função para apagar uma anotação
  function apagar(index: number) {
    let aux = index.toString();
    localStorage.removeItem(aux); // Remove a anotação do localStorage
    mensagemA = mensagemA.filter((_, i) => i !== index); // Atualiza o array removendo a anotação
  }
</script>

<!-- Renderiza as anotações -->
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

<!-- Área para adicionar novas anotações -->
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

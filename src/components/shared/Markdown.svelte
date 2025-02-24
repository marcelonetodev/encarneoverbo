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

<script lang="ts">
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
    class="flex flex-col border border-zinc-800 justify-around p-5 rounded-md gap-5 text-sm sm:text-base text-justify text-zinc-400"
  >
    <p class="font-semibold text-2xl sm:text-3xl">Mensagem gravada:</p>
    <p>{@html marked(mensagem)}</p>
  </div>
{/if}
<div
  class="flex flex-col border border-zinc-800 justify-around p-3 sm:p-5 rounded-md gap-5"
>
  <textarea
    class="p-3 h-36 resize-none outline-none text-sm sm:text-base text-zinc-400 text-justify"
    bind:value={markdown}
    placeholder={mensagem}
  ></textarea>

  <Botao
    funcao={() => localStorage.setItem("anotacoes", markdown)}
    texto="Salvar"
  />
</div>

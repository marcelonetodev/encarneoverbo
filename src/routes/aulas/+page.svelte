<script lang="ts">
    import Citacao from "../../components/shared/Citacao.svelte";
  import Play from "../../components/shared/Play.svelte";
  import Titulo from "../../components/shared/Titulo.svelte";
</script>

<div class="flex flex-col gap-10">
  <Titulo
  before="Aulas sobre o"
  key="Verbo"
  after="Anuncie a verdade, espalhe a esperança."
  />
  <Citacao />
  <!-- after="A Bíblia é a única fonte autêntica de conhecimento sobre Cristo. Sem ela, não podemos conhecê-Lo verdadeiramente, nem compreender o Seu propósito para nossas vidas. — John Stott" -->
  <!-- <span class="border-b border border-zinc-800"></span> -->
  <div class="flex flex-col">
    <Play />
  </div>
</div>

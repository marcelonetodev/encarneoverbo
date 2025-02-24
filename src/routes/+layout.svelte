<script lang="ts">
  import "../app.css";
  import Pagina from "../components/templates/Pagina.svelte";
  let { children } = $props();
</script>

<svelte:head>
  <title>Encarne o Verbo - Página Inicial</title>
  <meta
    name="description"
    content="Encarne o Verbo é sobre Cristo! É sobre buscar ao unico tesouro precioso que não poderíamos merecer, mas nos foi dado de bom grado por Cristo."
  />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Encarne o Verbo - Página Inicial" />
  <meta property="og:description" content="Descrição do meu site" />
  <meta property="og:image" content="URL_da_imagem_para_redes_sociais" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<Pagina>
  {@render children()}
</Pagina>

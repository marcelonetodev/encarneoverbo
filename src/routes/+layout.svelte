<script lang="ts">
  import "../app.css";
  import Pagina from "../components/templates/Pagina.svelte";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

  injectSpeedInsights();
  let { children } = $props();
</script>

<svelte:head>
  <title>Encarne o Verbo</title>
  <meta
    name="description"
    content="Encarne o Verbo é sobre Cristo! É sobre buscar ao unico tesouro precioso que não poderíamos merecer, mas nos foi dado de bom grado pelo Pai."
  />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Encarne o Verbo" />
  <meta property="og:description" content="Encarne o verbo é sobre Cristo!" />
  <meta property="og:image" content="./logo.png" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, user-scalable=no"
  />
</svelte:head>

<Pagina>
  {@render children()}
</Pagina>

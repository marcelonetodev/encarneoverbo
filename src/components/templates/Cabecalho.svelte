<!-- <script>
  import Logo from "../shared/Logo.svelte";

  </script>
  
  <header class="flex h-24 justify-center border-b border-zinc-800 items-center">
    <Logo />
    <slot></slot>
  </header> -->

<script>
  import Logo from "../shared/Logo.svelte";
</script>

<header
  class="flex items-center justify-between w-full h-24 px-4 border-b border-zinc-800"
>
  <!-- Logo, ajustando o tamanho conforme a tela -->
  <div class="flex items-center justify-center">
    <Logo />
  </div>

  <!-- Espaço para conteúdo adicional -->
  <div class="hidden sm:flex items-center justify-center flex-1">
    <slot></slot>
  </div>
</header>

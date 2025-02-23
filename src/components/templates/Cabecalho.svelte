<script>
  import Logo from "../shared/Logo.svelte";

  </script>
  
  <header class="flex h-24 justify-center border-b border-zinc-800 items-center">
    <Logo />
    <slot></slot>
  </header>
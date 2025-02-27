<script>
  import Logo from "../shared/Logo.svelte";
</script>

<header
  class="fixed top-0 bg-black flex items-center justify-between w-full h-24 px-4 border-b border-zinc-800"
>
  <div class="flex items-center justify-center">
    <Logo />
  </div>

  <div class="hidden sm:flex items-center justify-center flex-1">
    <slot></slot>
  </div>
</header>

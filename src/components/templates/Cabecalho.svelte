<script>
  import Logo from "../shared/Logo.svelte";
</script>

<header
  class=" flex items-center justify-between w-full h-24 px-4 border-zinc-300 border-b dark:border-zinc-950 "
>
  <div class="flex items-center justify-center">
    <Logo />
  </div>

  <div class="hidden sm:flex items-center justify-center flex-1">
    <slot></slot>
  </div>
</header>

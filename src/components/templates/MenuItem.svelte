<!-- <script>
  export let texto = "";
  export let href = "/";
</script>

<li>
  <a
    {href}
    class="underline-offset-8 flex gap-2 items-center cursor-pointer px-4 py-2 hover:underline hover:text-white text-zinc-300 hover:bg-white/10"
  >
    <span>{texto}</span>
  </a>
</li> -->

<script>
  export let texto = "";
  export let href = "/";
</script>

<li class="w-full">
  <a
    {href}
    class="underline-offset-8 flex gap-2 items-center cursor-pointer px-4 py-2 hover:underline hover:text-white text-zinc-300 hover:bg-white/10 w-full"
  >
    <span>{texto}</span>
  </a>
</li>

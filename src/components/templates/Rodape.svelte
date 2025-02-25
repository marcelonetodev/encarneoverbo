<script>
  import Logo from "../shared/Logo.svelte";
</script>

<footer class=" flex justify-end px-5 items-center border-t border-zinc-800">
  <div class="flex flex-col items-center justify-between flex-1 p-5">
    <Logo />
    <p class="p-5 text-zinc-700 text-center">
      <i>
        E o Verbo se fez carne, e habitou entre nós, cheio de graça e de
        verdade; e vimos a sua glória, como a glória do unigênito do Pai.
      </i><br />
      João 1:14
    </p>

    <h3 class="text-zinc-700">
      Todos os direitos reservados &copy Marcelo Neto - {new Date().getFullYear()}
    </h3>
  </div>
</footer>

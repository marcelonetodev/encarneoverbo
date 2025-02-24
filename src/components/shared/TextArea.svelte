<script lang="ts">
  export let anotacao: any = "";
  export let mensagem: any = "";
</script>

<textarea
  class="p-3 h-36 resize-none outline-none text-sm sm:text-base text-zinc-400 text-justify"
  bind:value={anotacao}
  placeholder={mensagem}
>
</textarea>

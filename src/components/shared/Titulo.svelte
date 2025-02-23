<script lang="ts">
  export let principal: any = null;
  export let secundario: any = null;
</script>

<div class="flex flex-col">
  {#if principal}
    <h1 class="text-3xl font-black">{principal}</h1>
  {/if}
  {#if secundario}
    <p class="text-sm text-zinc-400">{secundario}</p>
  {/if}
</div>

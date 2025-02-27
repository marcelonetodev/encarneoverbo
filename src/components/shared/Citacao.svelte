<script>
    import citacoes from "../../constants/citacoes";
    import Texto from "./Texto.svelte";
    let randomico = 0;

    function random() {
        randomico = Math.floor(Math.random() * (44 - 1) + 1);
    }
    random();
</script>

{#if citacoes}
    {#each citacoes as cit}
        {#if randomico === cit.id}
        <Texto versiculo={cit.citação} autor={cit.autor}/>
        {/if}
    {/each}
{/if}

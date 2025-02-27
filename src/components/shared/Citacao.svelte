<script>
    import citacoes from "../../constants/citacoes";
    import CopiarTexto from "./CopiarTexto.svelte";
    import Salvar from "./Salvar.svelte";
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
            <div class="relative my-3">
                <Salvar
                    text={null}
                    verse={null}
                    reference={null}
                    id={null}
                    autor={cit.autor}
                    citacao={cit.citação}
                />
                <CopiarTexto
                    text={null}
                    verse={null}
                    reference={null}
                    id={null}
                    citacao={cit.citação}
                    autor={cit.autor}
                />
                <Texto versiculo={cit.citação} autor={cit.autor} />
            </div>
        {/if}
    {/each}
{/if}

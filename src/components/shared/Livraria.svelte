<script lang="ts">
    import livraria from "../../constants/livraria/livraria.json";
    import Citacao from "./Citacao.svelte";
    import Titulo from "./Titulo.svelte";
</script>

<Citacao />

{#if livraria}
    <div
        class="md:grid sm:flex sm:flex-col md:grid-cols-3 lg:grid-cols-4 gap-5 px-10 md:px-5"
    >
        {#each livraria as lv}
            <a
                href={lv.link_compra}
                target="_blank"
                class="flex flex-col gap-5 my-5 md:my-0 rounded-sm dark:bg-zinc-900 bg-zinc-300 p-5"
            >
                <img
                    src={lv.imagem}
                    alt="Imagem do livro"
                    class="h-60 lg:h-80 md:h80 object-fill overflow-hidden rounded-sm"
                />
                <Titulo principalMenor={lv.título} secundario={lv.autor} />
            </a>
        {/each}
    </div>
    <Titulo
        secundario="Você será redirecionado para o site da amazon clicando no livro desejado"
    />
{/if}

<script lang="ts">
    export let citacao: any;
    export let autor: any;
    export let text: any;
    export let verse: any;
    export let reference: any;
    export let traducao: any;

    let mensagemA: string[] = [];
    export let maxAnotacoes: number = 20;

    function verificar(aux: string): boolean {
        return localStorage.getItem(aux) ? true : false;
    }
    let active = false;
    function setar(
        text: any,
        verse: any,
        reference: any,
        traducao: any,
        citacao: any,
        autor: any,
    ) {
        active = true;
        let novaMensagem = "";
        if (text && verse && reference && traducao && !autor) {
            novaMensagem =
                `[No texto de **${reference}:${verse} ${traducao}** diz: "${text}"](biblia)` ||
                "Versículo não disponível.";
        } else if (citacao && autor && !reference && !text) {
            novaMensagem =
                `"${citacao}" - ${autor}` || "Citação não disponível.";
        } else if (text && !verse && reference && !traducao && !autor) {
            novaMensagem =
                `[No texto de **${reference}** diz: "${text}"](biblia)` ||
                "Versículo não disponível.";
        } else if (
            text &&
            autor &&
            citacao &&
            !traducao &&
            !verse &&
            reference
        ) {
            novaMensagem =
                `[**${citacao} sobre : "${text} do módulo "${reference}", ministrada por ${autor}**"](aulas)` ||
                "Aula não disponível.";
        }else if (
            text &&
            autor &&
            !citacao &&
            !traducao &&
            !verse &&
            reference
        ) {
            novaMensagem =
                `[**"${text}" de "${autor}**"](${reference})` ||
                "Link não disponível.";
        }
        for (let i = 0; i < maxAnotacoes; i++) {
            let aux = i.toString();
            if (!verificar(aux)) {
                localStorage.setItem(aux, novaMensagem);
                mensagemA = [...mensagemA, novaMensagem];
                alert("Texto salvo em anotações!");
                active = false;
                break;
            }
        }
    }
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button
    class="px-1 py-0 text-sm rounded-b-sm hover:bg-green-500 dark:text-zinc-100 text-white dark:bg-zinc-800/50 bg-zinc-500 opacity-50 focus:outline-none absolute top-8 right-2 cursor-pointer"
    on:click={() => setar(text, verse, reference, traducao, citacao, autor)}
    title="Salvar"
>
    {#if !active}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 opacity-20"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
            />
        </svg>
    {/if}
    {#if active}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
        >
            <path
                fill-rule="evenodd"
                d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm1.5 1.5a.75.75 0 0 0-.75.75V16.5a.75.75 0 0 0 1.085.67L12 15.089l4.165 2.083a.75.75 0 0 0 1.085-.671V5.25a.75.75 0 0 0-.75-.75h-9Z"
                clip-rule="evenodd"
            />
        </svg>
    {/if}
</button>

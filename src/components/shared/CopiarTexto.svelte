<script lang="ts">
    export let text: any = "";
    export let autor: any = "";
    export let citacao: any = "";
    export let verse: any = "";
    export let reference: any = "";
    export let traducao: any = "";
    let active = false;
    function copiarTexto(
        text: any,
        verse: any,
        reference: any,
        traducao: any,
        autor: any,
        citacao: any,
    ) {
        active = true;
        let textoParaCopiar = "";
        if (text && verse && reference && traducao && !autor) {
            textoParaCopiar =
                `${reference}:${verse} ${traducao} diz: "${text}"  | Para saber mais, acesse ${reference}:${verse} em: encarneoverbo.com.br/biblia` ||
                "Texto não disponível.";
        } else if (citacao && autor && !text) {
            textoParaCopiar =
                `"${citacao}" - ${autor}  | Para ver mais citações como essa, acesse: encarneoverbo.com.br/biblia` ||
                "Texto não disponível.";
        } else if(text && reference && !traducao && !verse && !autor){
            textoParaCopiar =
                `${reference} diz: "${text}"  | Para saber mais, acesse ${reference} em: encarneoverbo.com.br/biblia` ||
                "Texto não disponível.";
            }else if(text && autor && citacao && !traducao && !verse  && reference){
                textoParaCopiar =
                `Veja a ${citacao}: "${text}" do módulo "${reference}", ministrada por ${autor} | Acesse em: encarneoverbo.com.br/aulas` ||
                "Texto não disponível.";
        }
        navigator.clipboard.writeText(textoParaCopiar).then(() => {
            alert("Texto copiado para a área de transferência!");
            active = false;
        });
    }
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button
    class="bg-transparent text-yellow-500/40 hover:text-yellow-500 px-2 py-1 text-sm rounded-tr-md focus:outline-none absolute top-0 right-0 cursor-pointer"
    on:click={() => copiarTexto(text, verse, reference, traducao, autor, citacao)}
    title="Copiar versículo"
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
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
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
                d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z"
            />
            <path
                d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z"
            />
        </svg>
    {/if}
</button>

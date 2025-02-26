<script lang="ts">
    export let text: any;
    export let verse: any;
    export let reference: any;

    let mensagemA: string[] = [];
    export let maxAnotacoes: number = 20;

    function verificar(aux: string): boolean {
        return localStorage.getItem(aux) ? true : false;
    }

    function setar(text: any, verse: any, reference: any) {
        let novaMensagem =
            `${reference}:${verse} - ${text}` || "Texto não disponível.";
        for (let i = 0; i < maxAnotacoes; i++) {
            let aux = i.toString();
            if (!verificar(aux)) {
                localStorage.setItem(aux, novaMensagem);
                mensagemA = [...mensagemA, novaMensagem];
                break;
            }
        }
    }
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button
    class="bg-transparent text-white/20 px-2 py-1 text-sm rounded-bl-md hover:bg-green-800/20 focus:outline-none absolute top-8 right-0 cursor-pointer"
    on:click={() => setar(text, verse, reference)}
    title="Salvar versículo"
>
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
</button>

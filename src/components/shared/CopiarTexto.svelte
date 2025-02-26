<script lang="ts">
    
    export let text: any = ""
    export let verse: any = ""
    export let reference: any = ""
    function copiarTexto(text: any, verse: any, reference: any) {
        const textoParaCopiar = `${reference}:${verse} - ${text}` || "Texto não disponível.";
        navigator.clipboard.writeText(textoParaCopiar).then(() => {
            alert("Texto copiado para a área de transferência!");
        });
}
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button
    class="bg-transparent text-white/20 px-2 py-1 text-sm rounded-tl-sm hover:bg-blue-800/20 focus:outline-none absolute top-0 right-0 cursor-pointer"
    on:click={()=>copiarTexto(text, verse, reference)}
    title="Copiar versículo"
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
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
        />
    </svg>
</button>

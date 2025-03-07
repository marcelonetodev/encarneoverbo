<!-- <script context="module">
    const players = new Set();

    export function stopAll() {
        players.forEach((p) => p.pause());
    }
</script>

<script>
    import { onMount } from "svelte";

    export let src;
    export let leg;

    let player;

    onMount(() => {
        players.add(player); 
    });
</script>

<div class="w-full flex justify-center p-5">
    <audio style="width: 100%; opacity:  0.3" bind:this={player} {src} controls>
        <p>Seu navegador não suporta áudio.</p>
        <dd>"A presença relacional de Deus"</dd>
        <track kind="subtitles" src={leg} srclang="pt-br" label="Português" />
    </audio>
</div>

<style>
</style> -->
<script context="module">
    const players = new Set();

    export function stopAll() {
        players.forEach((p) => p.pause());
    }
</script>

<script>
    import { onMount } from "svelte";

    export let src;
    export let leg;

    let player;
    let legenda = ''; // Variável para armazenar a legenda que será exibida

    onMount(() => {
        players.add(player);

        // Quando o player de áudio é carregado, adicionamos um ouvinte para as legendas
        player.addEventListener('loadeddata', () => {
            const track = player.querySelector('track');
            const trackElement = track.track;

            trackElement.mode = 'showing';  // Exibe as legendas diretamente

            // Ouvinte de evento que detecta a mudança de cue (legenda)
            trackElement.addEventListener('cuechange', () => {
                const activeCue = trackElement.activeCues[0];
                if (activeCue) {
                    // Atualiza a legenda na variável reativa
                    legenda = activeCue.text;
                } else {
                    // Limpa a legenda
                    // legenda = '';
                }
            });
        });
    });
</script>

<div class="w-full flex flex-col justify-center p-5">
    <audio style="width: 100%; opacity: 0.3" bind:this={player} {src} controls>
        <p>Seu navegador não suporta áudio.</p>
        <track kind="subtitles" src={leg} srclang="pt-br" label="Português" />
    </audio>

    {#if legenda}
        <div id="legenda" class="bg-black rounded-sm my-3 p-5 w-full opacity-40 ">
            <p class="text-thin text-zinc-400 text-center text-sm">{legenda}</p>
        </div>
    {/if}
</div>

<style>
</style>

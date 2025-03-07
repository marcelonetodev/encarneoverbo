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

    onMount(() => {
        // Like players.push(player)
        players.add(player);
    });
</script>

<div class="w-full flex justify-center p-5">
    <audio style="width: 100%; opacity:  0.3" bind:this={player} {src} controls>
        <p>Seu navegador não suporta áudio.</p>
        <dd>"A presença relacional de Deus"</dd>
        <!-- <track kind="captions" src={leg} srclang="pt-br" label="Português" /> -->
        <track kind="subtitles" src={leg} srclang="pt-br" label="Português" />
    </audio>
</div>

<style>
</style>
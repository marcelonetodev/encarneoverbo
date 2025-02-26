<!-- <script>
    import biblia from "../../constants/livros.js";
    import Titulo from "../../components/shared/Titulo.svelte";
    import ItemBiblia from "../../components/biblia/ItemBiblia.svelte";
</script>

<div class="flex flex-col gap-10 px-5">
    <Titulo
        principal="Bíblia"
        secundario="Escolha qual livro você quer ler"
        />

    <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
    >
        {#each biblia as b}
            <ItemBiblia biblia={b} />
        {/each}
    </div>
</div> -->

<script lang="ts">
    import biblia from "../../constants/livros.js";
    import Titulo from "../../components/shared/Titulo.svelte";
    let selectedBook: string | null = null;

    function handleBookSelection(event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        selectedBook = selectElement.value;
        for(let b of biblia){
            console.log(selectedBook)
            console.log(b.id)
            if(selectedBook == b.id){
                window.location.href = `/biblia/${b.id}`
            }
        }
    }
</script>

<div class="flex flex-col gap-10 px-5">
    <Titulo principal="Bíblia" secundario="Escolha qual livro você quer ler" />
    <select
        on:change={handleBookSelection}
        id="livro-select"
        name="livros"
        class=" placeholder:text-slate-40 pl-5 pr-8 py-2 transition duration-300 ease focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer flex-1 p-4 font-light border border-zinc-800 rounded-md bg-transparent text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-800"
    >
        <option class="bg-black" selected>Escolha o livro</option>
        {#each biblia as b}
            <option class="bg-black" value={b.id}>{b.titulo}</option>
        {/each}
    </select>
</div>
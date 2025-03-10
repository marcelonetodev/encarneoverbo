<script>
	import AudioPlay from "./AudioPlay.svelte";
	import Titulo from "./Titulo.svelte";
	import playlist from "../../constants/playlist/playlist";
	import Botao from "./Botao.svelte";
	import Texto from "./Texto.svelte";
	import CopiarTexto from "./CopiarTexto.svelte";
	import Salvar from "./Salvar.svelte";

	let count = 0;
	let desc = false;
	let descB = "Mostrar descrição da aula";
	const principal = "A presença relacional de Deus";

	function proximo() {
		count < playlist.length - 1 ? count++ : (count = 0);
		desc = false;
		descB = "Mostrar descrição da aula";
	}

	function anterior() {
		count > 0 ? count-- : (count = playlist.length - 1);
		desc = false;
		descB = "Mostrar descrição da aula";
	}
	function descricao() {
		desc = !desc;
		descB == "Mostrar descrição da aula"
			? (descB = "Esconder descrição da aula")
			: (descB = "Mostrar descrição da aula");
	}
</script>

<Titulo secundario="Conhecer a Deus através das Escrituras" principal={principal} />

{#each playlist as src, index}
	{#if count === index}
		<div class="dark:bg-zinc-950 bg-zinc-300 rounded-sm flex flex-col relative my-3">
			{#await src.audio}
				<p>Aguardando pregação</p>
			{:then value}
				<Salvar
					verse={null}
					traducao={null}
					reference={principal}
					text={src.name}
					autor={src.artist}
					citacao="Aula 0{index + 1}"
				/>
				<CopiarTexto
					verse={null}
					traducao={null}
					reference={principal}
					text={src.name}
					autor={src.artist}
					citacao="Aula 0{index + 1}"
				/>
				<Texto
					versiculo={src.name}
					index={src.artist}
					autor="Aula 0{index + 1}"
				/>
				<AudioPlay src={value} leg={src.leg} />
				<div class="flex w-full justify-around p-5">
					<Botao texto={descB} funcao={descricao} />
				</div>
				{#if desc}
					<div class="">
						<Texto textoMarkdown={src.description} />
					</div>
				{/if}
			{/await}
		</div>
	{/if}
{/each}

<div class="flex w-full justify-around p-5">
	<Botao texto="Aula anterior" funcao={anterior} />
	<Botao texto="Próxima aula" funcao={proximo} />
</div>

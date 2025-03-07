<script>
	import AudioPlayer from "./AudioPlay.svelte";
	import Titulo from "./Titulo.svelte";

	import audio1 from "../../constants/audio/Aula 01.m4a";
	import audio2 from "../../constants/audio/Aula 02.m4a";
	import audio3 from "../../constants/audio/A presença relacional de Deus Aula 03.m4a";
	import audio4 from "../../constants/audio/Aula 04.m4a";
	import audio5 from "../../constants/audio/A presença relacional de Deus Aula 05.m4a";
	import audio6 from "../../constants/audio/A presença relacional de Deus Aula 06.m4a";
	import audio7 from "../../constants/audio/Aula 07.m4a";
	import audio8 from "../../constants/audio/A presença relacional de Deus Aula 08.m4a";
	import Botao from "./Botao.svelte";
	import Texto from "./Texto.svelte";
	import CopiarTexto from "./CopiarTexto.svelte";
	import Salvar from "./Salvar.svelte";

	let count = 0;
	const secundario = "A presença relacional de Deus";

	const playlist = [
		{
			artist: "Diogo",
			name: "Como interpretar o pentateuco",
			audio: audio1,
		},
		{
			artist: "Milton",
			name: "O pentateuco, aplicação em Êxodo",
			audio: audio2,
		},
		{
			artist: "Eliene",
			name: "Como interpretar as narrativas/livros históricos",
			audio: audio3,
		},
		{
			artist: "Leidy",
			name: "Os livros históricos, aplicação em 1 e 2 Samuel",
			audio: audio4,
		},
		{
			artist: "Flávio",
			name: " Com interpretar os Evangelhos e Históricos, aplicação Lucas e Atos",
			audio: audio5,
		},
		{
			artist: "Isabella",
			name: " A presença relacional de Deus em Mateus, Marcos, Lucas e Atos",
			audio: audio6,
		},
		{
			artist: "Heber",
			name: "Com interpretar as cartas de Paulo, aplicação em 1ª Tessalonicenses",
			audio: audio7,
		},
		{
			artist: "Pedro",
			name: "As cartas de Paulo e aplicação em 1ª Tessalonicenses",
			audio: audio8,
		},
	];

	function proximo() {
		count < playlist.length - 1 ? count++ : (count = 0);
	}

	function anterior() {
		count > 0 ? count-- : (count = playlist.length - 1);
	}
</script>

<Titulo principal="Conhecer a Deus através das Escrituras" {secundario} />

{#each playlist as src, index}
	{#if count === index}
		<div class="bg-zinc-950 rounded-sm flex flex-col relative my-3">
			{#await src.audio}
				<p>Aguardando pregação</p>
			{:then value}
				<Salvar
					verse={null}
					traducao={null}
					reference={secundario}
					text={src.name}
					autor={src.artist}
					citacao="Aula 0{index + 1}"
				/>
				<CopiarTexto
					verse={null}
					traducao={null}
					reference={secundario}
					text={src.name}
					autor={src.artist}
					citacao="Aula 0{index + 1}"
				/>
				<Texto
					versiculo={src.name}
					index={src.artist}
					autor="Aula 0{index + 1}"
				/>
				<AudioPlayer src={value} />
			{/await}
		</div>
	{/if}
{/each}

<div class="flex w-full justify-around p-5">
	<Botao texto="Pregação Anterior" funcao={anterior} />
	<Botao texto="Próxima pregação" funcao={proximo} />
</div>

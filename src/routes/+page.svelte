<script lang="ts">
  import Texto from "../components/shared/Texto.svelte";
  import Titulo from "../components/shared/Titulo.svelte";

  let selectedBook: string | null = null;

  function handleBookSelection(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    selectedBook = selectElement.value;
  }

</script>

<div class="flex flex-col gap-10">
  <Titulo
    before="Encarne o"
    key="Verbo"
    after="No coração da palavra, onde a essência da alma se encontra com a arte do verbo, há um convite único, irresistível."
  />
  <Texto
    img="https://img.freepik.com/fotos-premium/cristo-com-os-discipulos-ia-generativa_225446-5263.jpg"
    textoSB="No princípio, antes do tempo, Ele já era. O Verbo, eterno e imutável, habitava o infinito, onde palavras não eram apenas sons, mas a essência de tudo que existe. Era a voz que ecoava no silêncio do universo, o sopro que sustentava a criação, o pensamento que movia as estrelas."
    descricaoImg="Encarne o Verbo!"
  />
</div>

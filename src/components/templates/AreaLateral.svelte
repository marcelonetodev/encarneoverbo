<script>
  import Menu from "./Menu.svelte";
  import MenuItem from "./MenuItem.svelte";
</script>

<aside
  class="flex flex-col self-start gap-10 min-w-72 border border-zinc-800 p-5 rounded-md"
>
  <Menu titulo="Navegação">
    <MenuItem texto="Bíblia" href="/" />
    <MenuItem texto="Contexto Histórico" href="/livros" />
    <MenuItem texto="Anotações" href="/anotacoes" />
  </Menu>
  <Menu titulo="Pentateuco">
    <MenuItem texto="Gênesis" href="/livros/GEN" />
    <MenuItem texto="Êxodo" href="/livros/EXO" />
    <MenuItem texto="Levítico" href="/livros/LEV" />
    <MenuItem texto="Números" href="/livros/NUM" />
    <MenuItem texto="Deuteronômio" href="/livros/DEU" />
  </Menu>
  <Menu titulo="Históricos">
    <MenuItem texto="Josué" href="/livros/JOS" />
    <MenuItem texto="Juízes" href="/livros/JDG" />
    <MenuItem texto="Rute" href="/livros/RUT" />
    <MenuItem texto="I Samuel" href="/livros/1SA" />
    <MenuItem texto="II Samuel" href="/livros/2SA" />
    <MenuItem texto="I Reis" href="/livros/1KI" />
    <MenuItem texto="II Reis" href="/livros/2KI" />
    <MenuItem texto="I Crônicas" href="/livros/1CH" />
    <MenuItem texto="II Crônicas" href="/livros/2CH" />
    <MenuItem texto="Esdras" href="/livros/EZR" />
    <MenuItem texto="Neemias" href="/livros/NEH" />
    <MenuItem texto="Ester" href="/livros/EST" />
  </Menu>
  <Menu titulo="Poéticos">
    <MenuItem texto="Jó" href="/livros/JOB" />
    <MenuItem texto="Salmos" href="/livros/PSA" />
    <MenuItem texto="Provérbios" href="/livros/PRO" />
    <MenuItem texto="Eclesiastes" href="/livros/ECC" />
    <MenuItem texto="Cantares" href="/livros/SNG" />
  </Menu>
  <Menu titulo="Proféticos">
    <MenuItem texto="Isaías" href="/livros/ISA" />
    <MenuItem texto="Jeremias" href="/livros/JER" />
    <MenuItem texto="Lamentações" href="/livros/LAM" />
    <MenuItem texto="Ezequiel" href="/livros/EZK" />
    <MenuItem texto="Daniel" href="/livros/DAN" />
    <MenuItem texto="Oseias" href="/livros/HOS" />
    <MenuItem texto="Joel" href="/livros/JOL" />
    <MenuItem texto="Amós" href="/livros/AMO" />
    <MenuItem texto="Obadias" href="/livros/OBA" />
    <MenuItem texto="Jonas" href="/livros/JON" />
    <MenuItem texto="Miqueias" href="/livros/MIC" />
    <MenuItem texto="Naum" href="/livros/NAM" />
    <MenuItem texto="Habacuque" href="/livros/HAB" />
    <MenuItem texto="Sofonias" href="/livros/ZEP" />
    <MenuItem texto="Ageu" href="/livros/HAG" />
    <MenuItem texto="Zacarias" href="/livros/ZEC" />
    <MenuItem texto="Malaquias" href="/livros/MAL" />
  </Menu>
  <Menu titulo="Evangelhos">
    <MenuItem texto="Mateus" href="/livros/MAT" />
    <MenuItem texto="Marcos" href="/livros/MRK" />
    <MenuItem texto="Lucas" href="/livros/LUK" />
    <MenuItem texto="João" href="/livros/JHN" />
  </Menu>
  <Menu titulo="Atos dos apóstolos">
    <MenuItem texto="Atos dos Apóstolos" href="/livros/ACT" />
  </Menu>
  <Menu titulo="Epístolas de Paulo">
    <MenuItem texto="Romanos" href="/livros/ROM" />
    <MenuItem texto="I Corintios" href="/livros/1CO" />
    <MenuItem texto="II Corintios" href="/livros/2CO" />
    <MenuItem texto="Gálatas" href="/livros/GAL" />
    <MenuItem texto="Efésios" href="/livros/EPH" />
    <MenuItem texto="Filipenses" href="/livros/PHP" />
    <MenuItem texto="Colossenses" href="/livros/COL" />
    <MenuItem texto="I Tessalonicenses" href="/livros/1TH" />
    <MenuItem texto="II Tessalonicenses" href="/livros/2TH" />
    <MenuItem texto="I Timóteo" href="/livros/1TI" />
    <MenuItem texto="II Timóteo" href="/livros/2TI" />
    <MenuItem texto="Tito" href="/livros/TIT" />
    <MenuItem texto="Filemon" href="/livros/PHM" />
    <MenuItem texto="Hebreus" href="/livros/HEB" />
  </Menu>
  <Menu titulo="Epístolas Gerais">
    <MenuItem texto="Tiago" href="/livros/JAS" />
    <MenuItem texto="I Pedro" href="/livros/1PE" />
    <MenuItem texto="II Pedro" href="/livros/2PE" />
    <MenuItem texto="I João" href="/livros/1JN" />
    <MenuItem texto="II João" href="/livros/2JN" />
    <MenuItem texto="III João" href="/livros/3JN" />
    <MenuItem texto="Judas" href="/livros/JUD" />
  </Menu>
  <Menu titulo="Apocalipse">
    <MenuItem texto="Apocalipse" href="/livros/REV" />
  </Menu>
  <!-- <Menu titulo="Outras categorias">
    <MenuItem texto="Ultimas notícias" href="/" />
    <MenuItem texto="Séries populares" href="/" />
    <MenuItem texto="Facebook" href="/" />
    <MenuItem texto="Instagram" href="/" />
    <MenuItem texto="Youtube" href="/" />
  </Menu> -->
</aside>

<!-- <script>
  import Menu from "./Menu.svelte";
  import MenuItem from "./MenuItem.svelte";
</script>

<aside
  class="flex flex-col self-start gap-10 min-w-72 border border-zinc-800 p-5 rounded-md"
>
  <Menu titulo="Navegação">
    <MenuItem texto="Bíblia" href="/" />
    <MenuItem texto="Estudo" href="/livros" />
    <MenuItem texto="Notas" href="/anotacoes" />
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
</aside> -->

<script lang="ts">
  import Menu from "./Menu.svelte";
  import MenuItem from "./MenuItem.svelte";
  function handleSelectChange(event: any) {
    const selectedValue = event.target.value;
    if (selectedValue) {
      window.location.href = selectedValue;
    }
  }
</script>

<aside
  class="flex flex-col self-start gap-10 min-w-72 border border-zinc-800 p-5 rounded-md"
>
  <Menu titulo="Navegação">
    <MenuItem texto="Início" href="/" />
    <MenuItem texto="Bíblia" href="/biblia" />
    <MenuItem texto="Estudo" href="/livros" />
    <MenuItem texto="Notas" href="/anotacoes" />
  </Menu>

  <Menu titulo="Pentateuco">
    <select
      class="w-full bg-black text-white border border-zinc-800 p-2 rounded-md"
      on:change={handleSelectChange}
    >
      <option value="/">Livros</option>
      <option value="/livros/GEN">Gênesis</option>
      <option value="/livros/EXO">Êxodo</option>
      <option value="/livros/LEV">Levítico</option>
      <option value="/livros/NUM">Números</option>
      <option value="/livros/DEU">Deuteronômio</option>
    </select>
  </Menu>

  <Menu titulo="Históricos">
    <select
      class="w-full bg-black text-white border border-zinc-800 p-2 rounded-md"
      on:change={handleSelectChange}
    >
    <option value="/">Livros</option>
    <option value="/livros/JOS">Josué</option>
      <option value="/livros/JDG">Juízes</option>
      <option value="/livros/RUT">Rute</option>
      <option value="/livros/1SA">I Samuel</option>
      <option value="/livros/2SA">II Samuel</option>
      <option value="/livros/1KI">I Reis</option>
      <option value="/livros/2KI">II Reis</option>
      <option value="/livros/1CH">I Crônicas</option>
      <option value="/livros/2CH">II Crônicas</option>
      <option value="/livros/EZR">Esdras</option>
      <option value="/livros/NEH">Neemias</option>
      <option value="/livros/EST">Ester</option>
    </select>
  </Menu>

  <Menu titulo="Poéticos">
    <select
      class="w-full bg-black text-white border border-zinc-800 p-2 rounded-md"
      on:change={handleSelectChange}
    >
    <option value="/">Livros</option>
    <option value="/livros/JOB">Jó</option>
      <option value="/livros/PSA">Salmos</option>
      <option value="/livros/PRO">Provérbios</option>
      <option value="/livros/ECC">Eclesiastes</option>
      <option value="/livros/SNG">Cantares</option>
    </select>
  </Menu>

  <Menu titulo="Proféticos">
    <select
      class="w-full bg-black text-white border border-zinc-800 p-2 rounded-md"
      on:change={handleSelectChange}
    >
    <option value="/">Livros</option>
    <option value="/livros/ISA">Isaías</option>
      <option value="/livros/JER">Jeremias</option>
      <option value="/livros/LAM">Lamentações</option>
      <option value="/livros/EZK">Ezequiel</option>
      <option value="/livros/DAN">Daniel</option>
      <option value="/livros/HOS">Oseias</option>
      <option value="/livros/JOL">Joel</option>
      <option value="/livros/AMO">Amós</option>
      <option value="/livros/OBA">Obadias</option>
      <option value="/livros/JON">Jonas</option>
      <option value="/livros/MIC">Miqueias</option>
      <option value="/livros/NAM">Naum</option>
      <option value="/livros/HAB">Habacuque</option>
      <option value="/livros/ZEP">Sofonias</option>
      <option value="/livros/HAG">Ageu</option>
      <option value="/livros/ZEC">Zacarias</option>
      <option value="/livros/MAL">Malaquias</option>
    </select>
  </Menu>

  <Menu titulo="Evangelhos">
    <select
      class="w-full bg-black text-white border border-zinc-800 p-2 rounded-md"
      on:change={handleSelectChange}
    >
    <option value="/">Livros</option>
    <option value="/livros/MAT">Mateus</option>
      <option value="/livros/MRK">Marcos</option>
      <option value="/livros/LUK">Lucas</option>
      <option value="/livros/JHN">João</option>
    </select>
  </Menu>

  <Menu titulo="Atos dos Apóstolos">
    <select
      class="w-full bg-black text-white border border-zinc-800 p-2 rounded-md"
      on:change={handleSelectChange}
    >
    <option value="/">Livros</option>
    <option value="/livros/ACT">Atos dos Apóstolos</option>
    </select>
  </Menu>

  <Menu titulo="Epístolas de Paulo">
    <select
      class="w-full bg-black text-white border border-zinc-800 p-2 rounded-md"
      on:change={handleSelectChange}
    >
    <option value="/">Livros</option>
    <option value="/livros/ROM">Romanos</option>
      <option value="/livros/1CO">I Coríntios</option>
      <option value="/livros/2CO">II Coríntios</option>
      <option value="/livros/GAL">Gálatas</option>
      <option value="/livros/EPH">Efésios</option>
      <option value="/livros/PHP">Filipenses</option>
      <option value="/livros/COL">Colossenses</option>
      <option value="/livros/1TH">I Tessalonicenses</option>
      <option value="/livros/2TH">II Tessalonicenses</option>
      <option value="/livros/1TI">I Timóteo</option>
      <option value="/livros/2TI">II Timóteo</option>
      <option value="/livros/TIT">Tito</option>
      <option value="/livros/PHM">Filemon</option>
      <option value="/livros/HEB">Hebreus</option>
    </select>
  </Menu>

  <Menu titulo="Epístolas Gerais">
    <select
      class="w-full bg-black text-white border border-zinc-800 p-2 rounded-md"
      on:change={handleSelectChange}
    >
    <option value="/">Livros</option>
    <option value="/livros/JAS">Tiago</option>
      <option value="/livros/1PE">I Pedro</option>
      <option value="/livros/2PE">II Pedro</option>
      <option value="/livros/1JN">I João</option>
      <option value="/livros/2JN">II João</option>
      <option value="/livros/3JN">III João</option>
      <option value="/livros/JUD">Judas</option>
    </select>
  </Menu>

  <Menu titulo="Apocalipse">
    <select
      class="w-full bg-black text-white border border-zinc-800 p-2 rounded-md"
      on:change={handleSelectChange}
    >
    <option value="/">Livros</option>
    <option value="/livros/REV">Apocalipse</option>
    </select>
  </Menu>
</aside>

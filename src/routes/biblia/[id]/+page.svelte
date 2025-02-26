<script>
    import { page } from "$app/stores";
    import ConteudoBiblia from "../../../components/biblia/ConteudoBiblia.svelte";
  </script>
  
  <ConteudoBiblia biblia={$page.data.b} />
  
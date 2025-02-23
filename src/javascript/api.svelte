<script lang="ts">
  /** @type {number} */
  let number: any = null;

  async function roll() {
    const response = await fetch(
      "https://bible-api.com/john 3:16?translation=kjv"
    );
    number = await response.json();
  }
</script>

<button onclick={roll}>Roll the dice</button>

{#if number !== undefined}
  <p>You rolled a {number}</p>
{/if}

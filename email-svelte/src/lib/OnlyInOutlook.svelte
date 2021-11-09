<script lang="ts">
  import { onMount } from 'svelte';

  let tempDiv: HTMLDivElement;

  onMount(() => {
    tempDiv.outerHTML = `<!--[if mso | IE]>${tempDiv.innerHTML}<![endif]-->`;
  });
</script>

<div bind:this={tempDiv}>
  <slot></slot>
</div>

<template>
  <details class="mito-details" :open="open">
    <summary class="summary">
      <slot name="summary"></slot>
    </summary>

    <div class="content">
      <slot />
    </div>
  </details>
</template>

<script lang="ts">
interface Props {
  open: boolean;
}

export default {
  name: "mito-details",

  props: { open: { default: false } },
};
</script>

<style scoped>
@layer {
  .mito-details {
    border-radius: 4px;
    border: 1px solid var(--color-secondary-main, black);
  }
  .mito-details .summary {
    background-color: var(--color-secondary-main, black);
    color: var(--color-secondary-text, white);
    cursor: pointer;
    padding: 16px;
  }
  .mito-details .content {
    padding: 8px;
  }
}
</style>
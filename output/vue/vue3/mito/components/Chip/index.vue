<template>
  <span class="mdc-chip-set" role="grid" ref="MitoChipRef">
    <span class="mdc-chip-set__chips" role="presentation">
      <span class="mdc-chip" role="row" id="c0">
        <span class="mdc-chip__cell mdc-chip__cell--primary" role="gridcell">
          <span
            class="mdc-chip__action mdc-chip__action--primary"
            type="button"
            tabindex="0"
          >
            <span class="mdc-chip__ripple mdc-chip__ripple--primary"></span>
            <span class="mdc-chip__text-label">Chip one</span>
          </span>
        </span>
      </span>
      <span class="mdc-chip" role="row" id="c1">
        <span class="mdc-chip__cell mdc-chip__cell--primary" role="gridcell">
          <span
            class="mdc-chip__action mdc-chip__action--primary"
            type="button"
            tabindex="-1"
          >
            <span class="mdc-chip__ripple mdc-chip__ripple--primary"></span>
            <span class="mdc-chip__text-label">Chip two</span>
          </span>
        </span>
      </span>
    </span>
  </span>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import { MDCChipSet } from "@material/chips";

const MitoChipRef = ref<undefined>();

onMounted(() => {
  const chipset = new MDCChipSet(MitoChipRef.value);
});
</script>
<template>
  <ul
    class="mdc-deprecated-list mdc-deprecated-list--two-line"
    ref="MitoListRef"
  >
    <li class="mdc-deprecated-list-item" tabindex="0">
      <span class="mdc-deprecated-list-item__ripple"></span>
      <span class="mdc-deprecated-list-item__text">
        <span class="mdc-deprecated-list-item__primary-text"
          >Two-line item</span
        >
        <span class="mdc-deprecated-list-item__secondary-text"
          >Secondary text</span
        >
      </span>
    </li>
    <li class="mdc-deprecated-list-item">
      <span class="mdc-deprecated-list-item__ripple"></span>
      <span class="mdc-deprecated-list-item__text">
        <span class="mdc-deprecated-list-item__primary-text"
          >Two-line item</span
        >
        <span class="mdc-deprecated-list-item__secondary-text"
          >Secondary text</span
        >
      </span>
    </li>
    <li class="mdc-deprecated-list-item">
      <span class="mdc-deprecated-list-item__ripple"></span>
      <span class="mdc-deprecated-list-item__text">
        <span class="mdc-deprecated-list-item__primary-text"
          >Two-line item</span
        >
      </span>
    </li>
  </ul>
</template>

<script lang="ts">
import { MDCList } from "@material/list";
import { MDCRipple } from "@material/ripple";

export default {
  name: "mito-list",

  mounted() {
    const list = new MDCList(this.$refs.MitoListRef);
    list.listElements.forEach((listItemEl) => new MDCRipple(listItemEl));
  },
};
</script>
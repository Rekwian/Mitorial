<template>
  <div class="mdc-menu-surface--anchor">
    <slot />
    <div class="mdc-menu mdc-menu-surface" ref="MitoMenuRef">
      <ul
        class="mdc-list"
        role="menu"
        aria-hidden="true"
        aria-orientation="vertical"
        tabindex="-1"
      >
        <li class="mdc-list-item" role="menuitem">
          <span class="mdc-list-item__ripple"></span>
          <span class="mdc-list-item__text">A Menu Item</span>
        </li>
        <li class="mdc-list-item" role="menuitem">
          <span class="mdc-list-item__ripple"></span>
          <span class="mdc-list-item__text">Another Menu Item</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
interface State {
  menu: any | MDCMenu;
}

import { MDCMenu } from "@material/menu";

export default {
  name: "mito-menu",

  data() {
    return { menu: {} };
  },

  mounted() {
    this.menu = new MDCMenu(this.$refs.MitoMenuRef);
  },

  methods: {
    open: function open() {
      this.menu.open = true;
    },
    close: function close() {
      this.menu.open = false;
    },
  },
};
</script>
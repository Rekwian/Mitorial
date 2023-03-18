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

<script setup lang="ts">
import { onMounted, ref } from "vue";
interface State {
  menu: any | MDCMenu;
}

import { MDCMenu } from "@material/menu";

const menu = ref({});

const MitoMenuRef = ref<HTMLDivElement>();

onMounted(() => {
  menu.value = new MDCMenu(MitoMenuRef.value);
});

function open() {
  menu.value.open = true;
}
function close() {
  menu.value.open = false;
}
</script>
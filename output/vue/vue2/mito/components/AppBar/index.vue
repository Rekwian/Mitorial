<template>
  <header class="mito-app-bar mdc-top-app-bar">
    <div class="mdc-top-app-bar__row">
      <section class="mito-app-bar-container">
        <div class="left-actions"></div>

        <div class="logo">
          <template v-if="fullLogo || minLogo">
            <h1>Contextual title</h1>
          </template>

          <template v-else>
            <h1>{{ title }}</h1>
          </template>
        </div>

        <div class="right-actions">
          <mito-button
            class="action"
            v-for="(nav, index) in nav"
            :text="true"
            :key="index"
            >{{ nav.text }}</mito-button
          >
          <mito-menu ref="MitoMenuRef">
            <mito-button
              class="action"
              :text="true"
              @click="toggleDisplayMenu"
              >{{ username }}</mito-button
            >
          </mito-menu>
        </div>
      </section>
    </div>
  </header>
</template>

<script lang="ts">
interface Nav {
  text: string;
}
interface Props {
  fullLogo?: string;
  minLogo?: string;
  title?: string;
  username?: string;
  nav?: [Nav];
}

import MitoButton from "../Button/index.vue";
import MitoMenu from "../Menu/index.vue";

export default {
  name: "mito-app-bar",
  components: { MitoButton: MitoButton, MitoMenu: MitoMenu },
  props: {
    title: { default: "Titre d'application" },
    fullLogo: { default: undefined },
    minLogo: { default: undefined },
    nav: { default: undefined },
    username: { default: undefined },
  },

  methods: {
    toggleDisplayMenu: function toggleDisplayMenu() {
      this.$refs.MitoMenuRef.open();
    },
  },
};
</script>

<style scoped>
.mito-app-bar {
  background-color: var(--mdc-theme-surface);
  color: var(--color-text-default);
  box-shadow: var(--box-shadow-default);
  position: sticky;
  top: 0;
}

.mito-app-bar .mito-app-bar-container {
  display: flex;
  flex: 1;
}

.mito-app-bar .left-actions {
  flex: 1;
}
.mito-app-bar .right-actions {
  align-items: stretch;
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.mito-app-bar .logo {
  align-items: center;
  flex: 1;
  display: flex;
  justify-content: center;
}

.mito-app-bar .right-actions .action {
  color: var(--color-text-default);
  height: 100%;
}
</style>
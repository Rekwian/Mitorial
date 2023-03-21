<template>
  <button :class="_classStringToObject(btnClasses)" @click="ripple($event)">
    <template v-if="loading">
      <mito-circular-progress :color="spinnerColor"></mito-circular-progress>
    </template>

    <template v-if="!loading">
      <slot />
    </template>
  </button>
</template>

<script lang="ts">
interface Props {
  color: string;
  outlined: boolean;
  loading?: boolean;
  spinnerColor: "string";
  text: boolean;
}

import ripple from "../../plugins/ripple";
import MitoCircularProgress from "../CircularProgress/index.vue";

export default {
  name: "mito-button",
  components: { MitoCircularProgress: MitoCircularProgress },
  props: ["color", "outlined", "text", "loading"],

  data() {
    return { spinnerColor: "primary", ripple };
  },

  computed: {
    btnClasses() {
      const classes = ["mito-button"];
      const color = this.color || "primary";
      if (this.outlined) {
        classes.push(`mito-button-outlined-${color}`);
      } else if (this.text) {
        classes.push(`mito-button-text-${color}`);
        this.spinnerColor = "surface";
      } else {
        classes.push(`mito-button-raised-${color}`);
        this.spinnerColor = "surface";
      }
      return classes.join(" ");
    },
  },

  methods: {
    _classStringToObject(str) {
      const obj = {};
      if (typeof str !== "string") {
        return obj;
      }
      const classNames = str.trim().split(/\s+/);
      for (const name of classNames) {
        obj[name] = true;
      }
      return obj;
    },
  },
};
</script>
<template>
  <button
    ref="MitoButtonRef"
    :class="_classStringToObject(btnClasses)"
    @click="handleClick"
    :disabled="disabled"
    :aria-label="ariaLabel"
  >
    <template v-if="loading">
      <mito-circular-progress :color="spinnerColor"></mito-circular-progress>
    </template>

    <template v-if="!loading">
      <span class="mdc-button__ripple"></span>

      <span class="mdc-button__touch"></span>

      <template v-if="iconPosition === 'left'">
        <i class="material-icons mdc-button__icon" aria-hidden="true">{{
          icon
        }}</i>
      </template>

      <span class="mdc-button__label"><slot /></span>

      <template v-if="iconPosition === 'right'">
        <i class="material-icons mdc-button__icon" aria-hidden="true">{{
          icon
        }}</i>
      </template>
    </template>
  </button>
</template>

<script lang="ts">
interface Props {
  outlined?: boolean;
  text?: boolean;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  loading?: boolean;
  icon?: string;
  iconPosition?: "left" | "right";
  spinnerColor: "string";
}

import { MDCRipple } from "@material/ripple";
import MitoCircularProgress from "../CircularProgress/index.vue";

export default {
  name: "mito-button",
  components: { MitoCircularProgress: MitoCircularProgress },
  props: {
    outlined: { default: undefined },
    text: { default: undefined },
    color: { default: undefined },
    loading: { default: undefined },
    disabled: { default: undefined },
    ariaLabel: { default: undefined },
    spinnerColor: { default: "white" },
    iconPosition: { default: undefined },
    icon: { default: undefined },
  },

  mounted() {
    const ripple = new MDCRipple(this.$refs.MitoButtonRef);
  },

  computed: {
    btnClasses() {
      const classes = ["mito-btn", "mdc-button"];
      if (this.outlined) {
        classes.push("mdc-button--outlined");
      } else if (this.text) {
        classes.push("mdc-button--text");
      } else {
        classes.push("mdc-button--raised");
      }
      if (this.color) {
        classes.push(`mdc-button--${this.color}`);
      }
      if (this.loading) {
        classes.push("mdc-button--loading");
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
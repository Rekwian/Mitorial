<template>
  <button
    ref="MitoButtonRef"
    :class="_classStringToObject(btnClasses)"
    @click="handleClick"
    :disabled="disabled"
    :aria-label="ariaLabel"
  >
    <template v-if="loading">
      <mito-circular-progress></mito-circular-progress>
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

<script setup lang="ts">
import { computed, onMounted } from "vue";
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
}

import { MDCRipple } from "@material/ripple";
import MitoCircularProgress from "../CircularProgress/index.vue";

const props = defineProps<Props>();

const MitoButtonRef = ref<HTMLButtonElement>();

onMounted(() => {
  const ripple = new MDCRipple(MitoButtonRef.value);
  return () => {
    ripple.destroy();
  };
});

const btnClasses = computed(() => {
  const classes = ["mito-btn", "mdc-button"];
  if (props.outlined) {
    classes.push("mdc-button--outlined");
  } else if (props.text) {
    classes.push("mdc-button--text");
  } else {
    classes.push("mdc-button--raised");
  }
  if (props.color) {
    classes.push(`mdc-button--${props.color}`);
  }
  if (props.loading) {
    classes.push("mdc-button--loading");
  }
  return classes.join(" ");
});

function _classStringToObject(str) {
  const obj = {};
  if (typeof str !== "string") {
    return obj;
  }
  const classNames = str.trim().split(/\s+/);
  for (const name of classNames) {
    obj[name] = true;
  }
  return obj;
}
</script>
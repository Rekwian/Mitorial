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

<script setup lang="ts">
import { computed, ref } from "vue";
interface Props {
  color: string;
  outlined: boolean;
  loading?: boolean;
  spinnerColor: "string";
  text: boolean;
}

import ripple from "../../plugins/ripple";
import MitoCircularProgress from "../CircularProgress/index.vue";

const props = defineProps<Props>();
const spinnerColor = ref("primary");

const btnClasses = computed(() => {
  const classes = ["mito-button"];
  const color = props.color || "primary";
  if (props.outlined) {
    classes.push(`mito-button-outlined-${color}`);
  } else if (props.text) {
    classes.push(`mito-button-text-${color}`);
    spinnerColor.value = "surface";
  } else {
    classes.push(`mito-button-raised-${color}`);
    spinnerColor.value = "surface";
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
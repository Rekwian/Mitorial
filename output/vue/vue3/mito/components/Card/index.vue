<template>
  <div :class="_classStringToObject(classes)"><slot /></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
interface Props {
  outlined: boolean;
}

const props = defineProps<Props>();

const classes = computed(() => {
  const classes = ["mito-card", "mdc-card"];
  if (props.outlined) {
    classes.push("mdc-card--outlined");
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
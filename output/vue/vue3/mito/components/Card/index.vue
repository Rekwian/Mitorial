<template>
  <div :class="_classStringToObject(classes)">
    <div class="mito-card--title">test</div>
    <div class="mito-card--body"><slot /></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
interface Props {
  outlined: boolean;
}

const props = defineProps<Props>();

const classes = computed(() => {
  const classes = ["mito-card"];
  if (props.outlined) {
    classes.push("mito-card-outlined");
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
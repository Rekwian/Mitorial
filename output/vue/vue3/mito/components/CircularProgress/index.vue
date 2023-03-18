<template>
  <div :class="_classStringToObject(loadClasses)"></div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps(["color"]);
const color = ref(props.color || "primary");

const loadClasses = computed(() => {
  const classes = ["mito-circular-progress"];
  if (props.color) {
    classes.push(`mito-circular-progress--${props.color}`);
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

<style scoped>
@layer {
  .mito-circular-progress {
    width: 20px;
    height: 20px;
    position: relative;
  }

  .mito-circular-progress::after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top: 3px solid
      var(--mito-circular-progress-color, var(--mdc-theme-primary));
    animation: spin 1s ease-in-out infinite;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: -3px;
    margin-top: -3px;
  }

  .mito-circular-progress::before {
    content: "";
    width: 20px;
    height: 20px;
    border: 3px solid
      var(--mito-circular-progress-color, var(--mdc-theme-primary));
    opacity: 0.3;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: -3px;
    margin-top: -3px;
  }

  .mito-circular-progress--primary {
    --mito-circular-progress-color: var(--mdc-theme-primary);
  }

  .mito-circular-progress--secondary {
    --mito-circular-progress-color: var(--mdc-theme-secondary);
  }

  .mito-circular-progress--success {
    --mito-circular-progress-color: var(--mdc-theme-success);
  }

  .mito-circular-progress--warning {
    --mito-circular-progress-color: var(--mdc-theme-warning);
  }

  .mito-circular-progress--error {
    --mito-circular-progress-color: var(--mdc-theme-error);
  }

  .mito-circular-progress--black {
    --mito-circular-progress-color: black;
  }

  .mito-circular-progress--white {
    --mito-circular-progress-color: white;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
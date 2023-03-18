<template>
  <div :class="_classStringToObject(classes)"><slot /></div>
</template>

<script lang="ts">
interface Props {
  outlined: boolean;
}

export default {
  name: "mito-card",

  props: ["outlined"],

  computed: {
    classes() {
      const classes = ["mito-card", "mdc-card"];
      if (this.outlined) {
        classes.push("mdc-card--outlined");
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
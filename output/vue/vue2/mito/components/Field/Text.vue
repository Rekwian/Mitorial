<template>
  <div class="mito-field-text">
    <template v-if="label">
      <label class="mito-field-text-label" :for="`mito-field-text-${name}`">
        {{ label }}
      </label>
    </template>

    <div
      class="mdc-text-field mdc-text-field--outlined mdc-text-field--no-label"
      ref="MitoFieldTextOutlinedRef"
    >
      <span class="mdc-notched-outline">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>

      <input
        class="mito-field-text-input mdc-text-field__input"
        aria-labelledby="my-label-id"
        :type="type"
        :id="`mito-field-text-${name}`"
        :placeholder="placeholder"
        :value="value"
        @input="handleInput"
      />
    </div>
  </div>
</template>

<script lang="ts">
interface Props {
  onInput: any;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  defaultValue: string | null;
}

import { MDCTextField } from "@material/textfield";

export default {
  name: "mito-field-old-text",

  props: {
    onInput: { default: undefined },
    label: { default: "" },
    name: { default: "" },
    type: { default: "" },
    placeholder: { default: "" },
  },

  data() {
    return { value: null };
  },

  mounted() {
    const textField = new MDCTextField(this.$refs.MitoFieldTextOutlinedRef);
  },

  methods: {
    handleInput: function handleInput(event) {
      const inputValue = event.target.value;
      this.value = inputValue;
      this.onInput(inputValue);
    },
  },
};
</script>

<style scoped>
.mdc-text-field--outlined {
  height: 40px;
}

@layer {
  .mito-field-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .mito-field-text-label {
    margin-bottom: 8px;
  }
}
</style>
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

<script setup lang="ts">
import { onMounted, ref } from "vue";
interface Props {
  onInput: any;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  defaultValue: string | null;
}

import { MDCTextField } from "@material/textfield";

const props = withDefaults(defineProps<Props>(), {
  onInput: undefined,
  label: "",
  name: "",
  type: "",
  placeholder: "",
});
const value = ref(null);

const MitoFieldTextOutlinedRef = ref<HTMLDivElement>();

onMounted(() => {
  const textField = new MDCTextField(MitoFieldTextOutlinedRef.value);
});

function handleInput(event) {
  const inputValue = event.target.value.value;
  value.value = inputValue;
  props.onInput(inputValue);
}
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
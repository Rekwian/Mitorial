<template>
  <div class="mdc-form-field" ref="MitoFieldRadioRef">
    <div class="mdc-radio">
      <input
        class="mdc-radio__native-control"
        type="radio"
        :id="id"
        :name="name"
        :checked="true"
      />
      <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle"></div>
        <div class="mdc-radio__inner-circle"></div>
      </div>
      <div class="mdc-radio__ripple"></div>
    </div>
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
interface Props {
  name: string;
  id: string;
  label: string;
}

import { MDCRadio } from "@material/radio";

const props = withDefaults(defineProps<Props>(), {
  id: "",
  name: "",
  label: "",
});

const MitoFieldRadioRef = ref<HTMLDivElement>();

onMounted(() => {
  const radio = new MDCRadio(MitoFieldRadioRef.value);
});
</script>
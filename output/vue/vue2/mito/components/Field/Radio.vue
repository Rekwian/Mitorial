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

<script lang="ts">
interface Props {
  name: string;
  id: string;
  label: string;
}

import { MDCRadio } from "@material/radio";

export default {
  name: "mito-field-radio",

  props: { id: { default: "" }, name: { default: "" }, label: { default: "" } },

  mounted() {
    const radio = new MDCRadio(this.$refs.MitoFieldRadioRef);
  },
};
</script>
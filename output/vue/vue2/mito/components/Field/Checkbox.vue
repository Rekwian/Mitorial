<template>
  <div class="mdc-form-field">
    <div class="mdc-checkbox" ref="MitoFieldCheckBoxRef">
      <input
        type="checkbox"
        class="mdc-checkbox__native-control"
        :id="name"
        :name="name"
      />
      <div class="mdc-checkbox__background">
        <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
          <path
            class="mdc-checkbox__checkmark-path"
            fill="none"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"
          ></path>
        </svg>
        <div class="mdc-checkbox__mixedmark"></div>
      </div>
      <div class="mdc-checkbox__ripple"></div>
    </div>
    <label :for="name">{{ label }}</label>
  </div>
</template>

<script lang="ts">
// import { MDCCheckbox } from '@material/checkbox';

interface Props {
  name: string;
  label: string;
}

export default {
  name: "mito-field-checkbox",

  props: { name: { default: undefined }, label: { default: "" } },
};
</script>
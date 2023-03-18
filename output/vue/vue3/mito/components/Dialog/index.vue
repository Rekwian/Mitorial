<template>
  <div>
    <div class="mdc-dialog" ref="MitoDialogRef">
      <div class="mdc-dialog__container">
        <div
          class="mdc-dialog__surface"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="my-dialog-title"
          aria-describedby="my-dialog-content"
        >
          <slot />
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
interface Store {
  dialog: any;
  isOpen: Boolean;
  open: Function;
  close: Function;
}

import { MDCDialog } from "@material/dialog";

const dialog = ref(null);
const isOpen = ref(false);

const MitoDialogRef = ref<HTMLDivElement>();

onMounted(() => {
  dialog.value = new MDCDialog(MitoDialogRef.value);
  dialog.value.listen("MDCDialog:opened", function () {
    MitoDialogRef.value.setAttribute("aria-hidden", "true");
  });
  dialog.value.listen("MDCDialog:closing", function () {
    MitoDialogRef.value.removeAttribute("aria-hidden");
  });
});

function open() {
  isOpen.value = true;
  dialog.value.open();
}
function close() {
  isOpen.value = false;
  dialog.value.close();
}
</script>
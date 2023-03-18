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

<script lang="ts">
interface Store {
  dialog: any;
  isOpen: Boolean;
  open: Function;
  close: Function;
}

import { MDCDialog } from "@material/dialog";

export default {
  name: "mito-dialog",

  data() {
    return { dialog: null, isOpen: false };
  },

  mounted() {
    this.dialog = new MDCDialog(this.$refs.MitoDialogRef);
    this.dialog.listen("MDCDialog:opened", function () {
      this.$refs.MitoDialogRef.setAttribute("aria-hidden", "true");
    });
    this.dialog.listen("MDCDialog:closing", function () {
      this.$refs.MitoDialogRef.removeAttribute("aria-hidden");
    });
  },

  methods: {
    open() {
      this.isOpen = true;
      this.dialog.open();
    },
    close() {
      this.isOpen = false;
      this.dialog.close();
    },
  },
};
</script>
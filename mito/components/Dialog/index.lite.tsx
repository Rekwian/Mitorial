import { onMount, Slot, useRef, useStore } from '@builder.io/mitosis'
import { MDCDialog } from '@material/dialog';

interface Store {
  dialog: any,
  isOpen: Boolean,
  open: Function,
  close: Function,
}

export default function MitoDialog() {
  const MitoDialogRef = useRef<HTMLDivElement>(null)
  const state = useStore<Store>({
    dialog: null,
    isOpen: false,
    open() {
      state.isOpen = true;
      state.dialog.open();
    },
    close() {
      state.isOpen = false;
      state.dialog.close();
    }
  })

  onMount(() => {
    state.dialog = new MDCDialog(MitoDialogRef)
    state.dialog.listen('MDCDialog:opened', function() {
      MitoDialogRef.setAttribute('aria-hidden', 'true');
    });
    state.dialog.listen('MDCDialog:closing', function() {
      MitoDialogRef.removeAttribute('aria-hidden');
    });
  })

  return (
    <div>
      <div ref={MitoDialogRef} class="mdc-dialog">
        <div class="mdc-dialog__container">
          <div
            class="mdc-dialog__surface"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="my-dialog-title"
            aria-describedby="my-dialog-content"
          >
            <Slot />
          </div>
        </div>
        <div class="mdc-dialog__scrim"></div>
      </div>
    </div>
  )
}
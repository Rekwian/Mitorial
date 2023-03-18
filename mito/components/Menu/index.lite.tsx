import { onMount, Slot, useRef, useStore } from '@builder.io/mitosis'
import { MDCMenu } from '@material/menu';

interface State {
  menu: any | MDCMenu,
}

export default function MitoMenu() {
  const MitoMenuRef = useRef<HTMLDivElement>(null);
  const state = useStore<State>({
    menu: {},
  })

  onMount(() => {
    state.menu = new MDCMenu(MitoMenuRef);
  })

  function open() {
    state.menu.open = true
  }
  function close() {
    state.menu.open = false
  }

  return (
    <div className="mdc-menu-surface--anchor">
      <Slot />
      <div ref={MitoMenuRef} class="mdc-menu mdc-menu-surface">
        <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabindex="-1">
          <li class="mdc-list-item" role="menuitem">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">A Menu Item</span>
          </li>
          <li class="mdc-list-item" role="menuitem">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">Another Menu Item</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
import { For, Show, useDefaultProps, useRef, useStyle} from '@builder.io/mitosis';
import MitoButton from '../Button/index.lite'
import MitoMenu from '../Menu/index.lite'

interface Nav {
  text: string,
}

interface Props {
  fullLogo?: string,
  minLogo?: string,
  title?: string,
  username?: string,
  nav?: [Nav],
}

export default function MitoAppBar(props: Props) {
  const MitoMenuRef = useRef(null)
  useStyle(`
    .mito-app-bar {
      background-color: var(--mdc-theme-surface);
      color: var(--color-text-default);
      box-shadow: var(--box-shadow-default);
      position: sticky;
      top: 0;
    }
    
    .mito-app-bar .mito-app-bar-container {
      display: flex;
      flex: 1;
    }
    
    .mito-app-bar .left-actions {
      flex: 1;
    }
    .mito-app-bar .right-actions {
      align-items: stretch;
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }
    .mito-app-bar .logo {
      align-items: center;
      flex: 1;
      display: flex;
      justify-content: center;
    }

    .mito-app-bar .right-actions .action {
      color: var(--color-text-default);
      height: 100%;
    }
  `)

  useDefaultProps({
    title: 'Titre d\'application',
  })

  function toggleDisplayMenu() {
    MitoMenuRef.open()
  }

  return (
    <header class="mito-app-bar mdc-top-app-bar">
      <div class="mdc-top-app-bar__row">
        <section class="mito-app-bar-container">
          <div class="left-actions" />

          <div class="logo">
            <Show when={props.fullLogo || props.minLogo} else={<h1>{props.title}</h1>}>
              <h1>Contextual title</h1>
            </Show>
          </div>

          <div class="right-actions">
            <For each={props.nav}>
              {(nav: Nav) => <mito-button class="action" text>{nav.text}</mito-button>}
            </For>
            <mito-menu ref={MitoMenuRef}>
              <mito-button class="action" text onClick={toggleDisplayMenu}>{props.username}</mito-button>
            </mito-menu>
          </div>
        </section>
      </div>
    </header>
  )
}
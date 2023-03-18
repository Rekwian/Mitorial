import { onMount, onUnMount, Show, Slot, useDefaultProps, useRef, useStore, useStyle } from '@builder.io/mitosis';
import { MDCRipple } from '@material/ripple';
import MitoCircularProgress from '../CircularProgress/index.lite';

interface Props {
  outlined?: boolean;
  text?: boolean;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  loading?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  spinnerColor: 'string';
}

export default function MitoButton(props: Props) {
  const MitoButtonRef = useRef<HTMLButtonElement>(null);

  useDefaultProps({
    spinnerColor: 'white'
  })

  const state = useStore({
    get btnClasses(): string {
      const classes = ['mito-btn', 'mdc-button'];

      if (props.outlined) {
        classes.push('mdc-button--outlined');
      } else if (props.text) {
        classes.push('mdc-button--text');
      } else {
        classes.push('mdc-button--raised');
      }

      if (props.color) {
        classes.push(`mdc-button--${props.color}`);
      }

      if (props.loading) {
        classes.push('mdc-button--loading');
      }

      return classes.join(' ');
    }
  });

  onMount(() => {
    const ripple = new MDCRipple(MitoButtonRef);
  });

  const handleClick = (event: Event) => {
    event.preventDefault();
    if (!props.disabled && !props.loading) {
      props.onClick();
    }
  };

  return (
    <button
      ref={MitoButtonRef}
      class={state.btnClasses}
      onClick={handleClick}
      disabled={props.disabled}
      aria-label={props.ariaLabel}
    >
      <Show when={props.loading}>
        <mito-circular-progress color={props.spinnerColor} />
      </Show>
      <Show when={!props.loading}>
        <span class="mdc-button__ripple" />
        <span class="mdc-button__touch" />
        <Show when={props.iconPosition === 'left'}>
          <i class="material-icons mdc-button__icon" aria-hidden="true">{ props.icon }</i>
        </Show>
        <span class="mdc-button__label"><Slot /></span>
        <Show when={props.iconPosition === 'right'}>
          <i class="material-icons mdc-button__icon" aria-hidden="true">{ props.icon }</i>
        </Show>
      </Show>
    </button>
  );
}

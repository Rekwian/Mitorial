import { Show, Slot, useDefaultProps, useStore } from '@builder.io/mitosis';
import ripple from '../../plugins/ripple'
import MitoCircularProgress from '../CircularProgress/index.lite';

interface Props {
  color: string,
  outlined: boolean,
  loading?: boolean;
  spinnerColor: 'string';
  text: boolean,
}

export default function MitoButton(props: Props) {
  const state = useStore({
    spinnerColor: 'primary',
    get btnClasses(): string {
      const classes = ['mito-button'];
      const color = props.color || 'primary'

      if (props.outlined) {
        classes.push(`mito-button-outlined-${color}`)
      } else if (props.text) {
        classes.push(`mito-button-text-${color}`)
        state.spinnerColor = 'surface'
      } else {
        classes.push(`mito-button-raised-${color}`)
        state.spinnerColor = 'surface'
      }

      return classes.join(' ');
    }
  })

  return (
    <button class={state.btnClasses} onClick={(event) => ripple(event)}>
      <Show when={props.loading}>
        <mito-circular-progress color={state.spinnerColor} />
      </Show>
      <Show when={!props.loading}>
        <Slot />
      </Show>
    </button>
  )
}

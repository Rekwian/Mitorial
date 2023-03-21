import { Slot, useStore } from '@builder.io/mitosis';

interface Props {
  outlined: boolean;
}

export default function MitoCard(props: Props) {
  const state = useStore({
    get classes(): string {
      const classes = ['mito-card']
      if (props.outlined) {
        classes.push('mito-card-outlined');
      }

      return classes.join(' ');
    }
  })
  return (
    <div class={state.classes}>
      <div class="mito-card--title">test</div>
      <div class="mito-card--body"><Slot /></div>
    </div>
  )
}

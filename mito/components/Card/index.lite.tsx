import { Slot, useStore } from '@builder.io/mitosis';

interface Props {
  outlined: boolean;
}

export default function MitoCard(props: Props) {
  const state = useStore({
    get classes(): string {
      const classes = ['mito-card', 'mdc-card']
      if (props.outlined) {
        classes.push('mdc-card--outlined');
      }
      
      return classes.join(' ');
    }
  })
  return (
    <div class={state.classes}><Slot /></div>
  )
}
import { onMount, useDefaultProps, useRef } from '@builder.io/mitosis';
import { MDCRadio } from '@material/radio';

interface Props {
  name: string,
  id: string,
  label: string,
}

export default function MitoFieldRadio(props: Props) {
  let MitoFieldRadioRef = useRef<HTMLDivElement>(null);

  useDefaultProps({
    name: '',
    label: '',
    id: '',
  })
  
  onMount(() => {
    const radio = new MDCRadio(MitoFieldRadioRef);
  })
  
  return (
    <div ref={MitoFieldRadioRef} class="mdc-form-field">
      <div class="mdc-radio">
        <input class="mdc-radio__native-control" type="radio" id={props.id} name={props.name} checked />
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        <div class="mdc-radio__ripple"></div>
      </div>
      <label for={props.id}>{props.label}</label>
    </div>
  )
}
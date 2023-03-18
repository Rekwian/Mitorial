import { onMount, useDefaultProps, useRef } from '@builder.io/mitosis';
// import { MDCCheckbox } from '@material/checkbox';

interface Props {
  name: string,
  label: string,
}

export default function MitoFieldCheckbox(props: Props) {
  const MitoFieldCheckBoxRef = useRef<HTMLDivElement>(null);

  useDefaultProps({
    label: '',
  })

  // onMount(() => {
  //   const checkbox = new MDCCheckbox(MitoFieldCheckBoxRef);
  // })

  return (
    <div class="mdc-form-field">
      <div ref={MitoFieldCheckBoxRef} class="mdc-checkbox">
        <input type="checkbox" class="mdc-checkbox__native-control" id={props.name} name={props.name} />
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        <div class="mdc-checkbox__ripple"></div>
      </div>
      <label for={props.name}>{props.label}</label>
    </div>
  )
}
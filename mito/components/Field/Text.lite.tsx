import { MDCTextField } from '@material/textfield'
import { onMount, Show, useDefaultProps, useRef, useStore, useStyle } from '@builder.io/mitosis'

interface Props {
  onInput: any,
  label: string,
  name: string,
  type: string,
  placeholder: string,
  defaultValue: string | null
}

export default function MitoFieldOldText(props: Props) {
  const MitoFieldTextOutlinedRef = useRef<HTMLDivElement>(null)

  useStyle(`
    .mdc-text-field--outlined {
      height: 40px;
    }

    @layer {
      .mito-field-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .mito-field-text-label {
        margin-bottom: 8px;
      }
    }
  `)

  let state = useStore({
    value: null,
  })

  useDefaultProps({
    label: '',
    name: '',
    type: '',
    defaultValue: '',
    placeholder: ''
  })

  onMount(() => {
    const textField = new MDCTextField(MitoFieldTextOutlinedRef)
  })

  function handleInput(event) {
    const inputValue = event.target.value
    state.value = inputValue
    props.onInput(inputValue)
  }

  return (
    <div class="mito-field-text">
      <Show when={props.label}>
        <label
          for={`mito-field-text-${props.name}`}
          class="mito-field-text-label">
          {props.label}
        </label>
      </Show>
      <div
        ref={MitoFieldTextOutlinedRef}
        class="mdc-text-field mdc-text-field--outlined mdc-text-field--no-label"
      >
        <span class="mdc-notched-outline">
          <span class="mdc-notched-outline__leading" />
          <span class="mdc-notched-outline__trailing" />
        </span>

        <input
          type={props.type}
          id={`mito-field-text-${props.name}`}
          class="mito-field-text-input mdc-text-field__input" aria-labelledby="my-label-id"
          placeholder={props.placeholder}
          value={state.value}
          onInput={handleInput}
        />
      </div>
    </div>
  )
}
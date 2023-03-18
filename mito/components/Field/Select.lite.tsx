import { onMount, Show, useDefaultProps, useRef } from '@builder.io/mitosis';
import { MDCSelect } from "@material/select";

export default function MitoFieldSelect(props) {
  const MitoFieldSelectRef = useRef(null)

  useDefaultProps({
    name: '',
  })

  onMount(() => {
    const select = new MDCSelect(MitoFieldSelectRef);
    select.listen("MDCSelect:change", () => {
      alert(
        `Selected option at index ${select.selectedIndex} with value "${select.value}"`
      );
    });
  });

  return (
    <div>
      <Show when={props.label}>
        <label for={`mito-field-text-${props.name}`} class="mito-field-text-label">{props.label}</label>
      </Show>

      <div
        ref={MitoFieldSelectRef}
        class="mdc-select mdc-select--outlined mdc-select--no-label demo-width-class"
      >
        <div class="mdc-select__anchor">
          <span class="mdc-notched-outline">
            <span class="mdc-notched-outline__leading" />
            <span class="mdc-notched-outline__trailing" />
          </span>
          <span class="mdc-select__selected-text-container">
            <span class="mdc-select__selected-text" />
          </span>
          <span class="mdc-select__dropdown-icon">
            <svg
              class="mdc-select__dropdown-icon-graphic"
              viewBox="7 10 10 5"
              focusable="false"
            >
              <polygon
                class="mdc-select__dropdown-icon-inactive"
                stroke="none"
                fill-rule="evenodd"
                points="7 10 12 15 17 10"
              />
              <polygon
                class="mdc-select__dropdown-icon-active"
                stroke="none"
                fill-rule="evenodd"
                points="7 15 12 10 17 15"
              />
            </svg>
          </span>
        </div>

        <div
          class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth"
        >
          <ul class="mdc-deprecated-list" role="listbox" aria-label="Food picker listbox">
            <li
              class="mdc-deprecated-list-item mdc-deprecated-list-item--selected"
              aria-selected="true"
              data-value=""
              role="option"
            >
              <span class="mdc-deprecated-list-item__ripple" />
            </li>

            <li
              class="mdc-deprecated-list-item"
              aria-selected="false"
              data-value="grains"
              role="option"
            >
              <span class="mdc-deprecated-list-item__ripple" />
              <span class="mdc-deprecated-list-item__text">
                Bread, Cereal, Rice, and Pasta
              </span>
            </li>

            <li
              class="mdc-deprecated-list-item mdc-deprecated-list-item--disabled"
              aria-selected="false"
              data-value="vegetables"
              aria-disabled="true"
              role="option"
            >
              <span class="mdc-deprecated-list-item__ripple" />
              <span class="mdc-deprecated-list-item__text"> Vegetables </span>
            </li>

            <li
              class="mdc-deprecated-list-item"
              aria-selected="false"
              data-value="fruit"
              role="option"
            >
              <span class="mdc-deprecated-list-item__ripple" />
              <span class="mdc-deprecated-list-item__text"> Fruit </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
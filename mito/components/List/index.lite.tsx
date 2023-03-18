import { onMount, useRef } from '@builder.io/mitosis';
import { MDCList } from '@material/list';
import { MDCRipple } from '@material/ripple';

export default function MitoList() {
  const MitoListRef = useRef<HTMLUListElement>(null)

  onMount(() => {
    const list = new MDCList(MitoListRef);
    list.listElements.forEach((listItemEl) => new MDCRipple(listItemEl));
  })
  
  return (
    <ul ref={MitoListRef} class="mdc-deprecated-list mdc-deprecated-list--two-line">
      <li class="mdc-deprecated-list-item" tabindex="0">
        <span class="mdc-deprecated-list-item__ripple"></span>
        <span class="mdc-deprecated-list-item__text">
          <span class="mdc-deprecated-list-item__primary-text">Two-line item</span>
          <span class="mdc-deprecated-list-item__secondary-text">Secondary text</span>
        </span>
      </li>
      <li class="mdc-deprecated-list-item">
        <span class="mdc-deprecated-list-item__ripple"></span>
        <span class="mdc-deprecated-list-item__text">
          <span class="mdc-deprecated-list-item__primary-text">Two-line item</span>
          <span class="mdc-deprecated-list-item__secondary-text">Secondary text</span>
        </span>
      </li>
      <li class="mdc-deprecated-list-item">
        <span class="mdc-deprecated-list-item__ripple"></span>
        <span class="mdc-deprecated-list-item__text">
          <span class="mdc-deprecated-list-item__primary-text">Two-line item</span>
        </span>
      </li>
    </ul>
  )
}
import { Slot, useDefaultProps, useStyle } from '@builder.io/mitosis';

interface Props {
  open: boolean,
}

export default function MitoDetails(props: Props) {
  useStyle(`
    @layer {
      .mito-details {
        border-radius: 4px;
        border: 1px solid var(--color-secondary-main, black);
      }
      .mito-details .summary {
        background-color: var(--color-secondary-main, black);
        color: var(--color-secondary-text, white);
        cursor: pointer;
        padding: 16px;
      }
      .mito-details .content {
        padding: 8px
      }
    }
  `)

  useDefaultProps<Props>({
    open: false,
  })

  return (
    <details open={props.open} class="mito-details">
      <summary class="summary">
        <Slot name="summary" />
      </summary>

      <div class="content">
        <Slot />
      </div>
    </details>
  )
}
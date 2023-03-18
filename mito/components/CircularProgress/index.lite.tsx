import { useStore, useStyle } from '@builder.io/mitosis'

export default function MitoCircularProgress(props) {
  useStyle(`
    @layer {
      .mito-circular-progress {
        width: 20px;
        height: 20px;
        position: relative;
      }

      .mito-circular-progress::after {
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top: 3px solid var(--mito-circular-progress-color, var(--mdc-theme-primary));
        animation: spin 1s ease-in-out infinite;
        position: absolute;
        top: 0;
        left: 0;
        margin-left: -3px;
        margin-top: -3px;
      }

      .mito-circular-progress::before {
        content: '';
        width: 20px;
        height: 20px;
        border: 3px solid var(--mito-circular-progress-color, var(--mdc-theme-primary));
        opacity: 0.3;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        margin-left: -3px;
        margin-top: -3px;
      }

      .mito-circular-progress--primary {
        --mito-circular-progress-color: var(--mdc-theme-primary);
      }

      .mito-circular-progress--secondary {
        --mito-circular-progress-color: var(--mdc-theme-secondary);
      }

      .mito-circular-progress--success {
        --mito-circular-progress-color: var(--mdc-theme-success);
      }

      .mito-circular-progress--warning {
        --mito-circular-progress-color: var(--mdc-theme-warning);
      }

      .mito-circular-progress--error {
        --mito-circular-progress-color: var(--mdc-theme-error);
      }

      .mito-circular-progress--black {
        --mito-circular-progress-color: black;
      }

      .mito-circular-progress--white {
        --mito-circular-progress-color: white;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    }
  `)

  const state = useStore({
    color: props.color || 'primary',
    get loadClasses(): string {
      const classes = ['mito-circular-progress']
      if (props.color) {
        classes.push(`mito-circular-progress--${props.color}`)
      }
      return classes.join(' '); 
    },
  });

  return (
    <div class={state.loadClasses} />
  )
}

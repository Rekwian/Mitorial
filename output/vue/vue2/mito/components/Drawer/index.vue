<template>
  <aside class="mdc-drawer">
    <div class="mdc-drawer__content">
      <nav class="mdc-deprecated-list">
        <a
          class="mdc-deprecated-list-item mdc-deprecated-list-item--activated"
          href="#"
          aria-current="page"
        >
          <span class="mdc-deprecated-list-item__ripple"></span>
          <i
            class="material-icons mdc-deprecated-list-item__graphic"
            aria-hidden="true"
            >inbox</i
          >
          <span class="mdc-deprecated-list-item__text">Inbox</span>
        </a>
        <a class="mdc-deprecated-list-item" href="#">
          <span class="mdc-deprecated-list-item__ripple"></span>
          <i
            class="material-icons mdc-deprecated-list-item__graphic"
            aria-hidden="true"
            >send</i
          >
          <span class="mdc-deprecated-list-item__text">Outgoing</span>
        </a>
        <a class="mdc-deprecated-list-item" href="#">
          <span class="mdc-deprecated-list-item__ripple"></span>
          <i
            class="material-icons mdc-deprecated-list-item__graphic"
            aria-hidden="true"
            >drafts</i
          >
          <span class="mdc-deprecated-list-item__text">Drafts</span>
        </a>
      </nav>
    </div>
  </aside>
</template>

<script lang="ts">
export default {
  name: "mito-drawer",
};
</script>
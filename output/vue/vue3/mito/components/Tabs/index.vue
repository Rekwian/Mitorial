<template>
  <div class="mdc-tab-bar" role="tablist" ref="MitoTabsRef">
    <div class="mdc-tab-scroller">
      <div class="mdc-tab-scroller__scroll-area">
        <div class="mdc-tab-scroller__scroll-content">
          <button
            class="mdc-tab mdc-tab--active"
            role="tab"
            aria-selected="true"
            tabindex="0"
          >
            <span class="mdc-tab__content">
              <span class="mdc-tab__icon material-icons" aria-hidden="true"
                >favorite</span
              >
              <span class="mdc-tab__text-label">Favorites</span>
            </span>
            <span class="mdc-tab-indicator mdc-tab-indicator--active">
              <span
                class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"
              ></span>
            </span>
            <span class="mdc-tab__ripple"></span>
          </button>
          <button
            class="mdc-tab mdc-tab--active"
            role="tab"
            aria-selected="true"
            tabindex="0"
          >
            <span class="mdc-tab__content">
              <span class="mdc-tab__icon material-icons" aria-hidden="true"
                >favorite</span
              >
              <span class="mdc-tab__text-label">Favorites</span>
            </span>
            <span class="mdc-tab-indicator mdc-tab-indicator--active">
              <span
                class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"
              ></span>
            </span>
            <span class="mdc-tab__ripple"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import { MDCTabBar } from "@material/tab-bar";

const MitoTabsRef = ref<HTMLDivElement>();

onMounted(() => {
  const tabBar = new MDCTabBar(MitoTabsRef.value);
});
</script>
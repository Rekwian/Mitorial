<script setup lang="ts">
import { reactive, ref } from 'vue'

const MitoDialogRef = ref(null)
const MitoMenuRef = ref(null)

let state = reactive({
  dialogDisplay: false,
  menuDisplay: false,
})

function test(e) {
  console.log({ e })
}

function toggleDisplayMenu() {
  console.log(MitoMenuRef.value.open());
}
</script>

<template>
  <div class="app">
    <mito-app-bar
      class="header"
      username="Jean-michel Gudule"
    />
    <mito-drawer class="drawer">test</mito-drawer>

    <main class="main">
      <mito-circular-progress />
      <h2>OBUTTON</h2>
      <div class="button">
        <mito-button>primary-raised</mito-button>
        <mito-button color="secondary">secondary-raised</mito-button>
        <mito-button disabled>disabled</mito-button>
        <mito-button :loading="true">loading</mito-button>
        <mito-button :outlined="true">test</mito-button>
        <mito-button :text="true">text</mito-button>
      </div>

      <h2>OCARD</h2>
      <mito-card style="margin-bottom: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illum officia sed magnam. Vitae corporis officiis et rem nihil cupiditate ratione facilis, fugit consequuntur aliquid atque quisquam in. Odit, iste!</mito-card>
      <mito-card :outlined="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illum officia sed magnam. Vitae corporis officiis et rem nihil cupiditate ratione facilis, fugit consequuntur aliquid atque quisquam in. Odit, iste!</mito-card>

      <h2>ODETAILS</h2>
      <mito-details>
        <template #summary>ceci est mon titre</template>
        <template #content></template>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illum officia sed magnam. Vitae corporis officiis et rem nihil cupiditate ratione facilis, fugit consequuntur aliquid atque quisquam in. Odit, iste!</mito-details>

      <h2>OMenu</h2>
      <pre><code>{{  state.menuDisplay  }}</code></pre>
      <mito-menu ref="MitoMenuRef">
        <mito-button @click="toggleDisplayMenu">test</mito-button>
      </mito-menu>

      <h2>OFIELDTEXT</h2>
      <mito-field-text
        type="text"
        label="Tato"
        :outlined="true"
        placeholder="Placeholder"
        default-value="test"
        @input="test"
      />

      <h2>OFieldSelect</h2>
      <mito-field-select></mito-field-select>

      <h2>OFIELDCHECKBOX</h2>
      <mito-field-checkbox label="checkbox-1" name="checkbox-1" />
      <mito-field-checkbox label="checkbox-1" name="checkbox-2" />

      <h2>OFIELDRADIO</h2>
      <mito-field-radio label="radimito-1" name="radimito-1" id="radimito-1" />
      <mito-field-radio label="radimito-2" name="radimito-1" id="radimito-2"/>

      <h2>OCHIPS</h2>
      <mito-chip>test</mito-chip>
      <mito-chip>test2</mito-chip>
      <mito-chip>test3</mito-chip>

      <h2>OLIST</h2>
      <mito-list>test</mito-list>

      <h2>OTabs</h2>
      <mito-tabs>test</mito-tabs>

      <h2>ODIALOG</h2>
      <mito-button @click="test">openDialog</mito-button>
      <p>{{ state.dialogDisplay }}</p>
      <mito-dialog
        ref="MitoDialogRef"
        :is-open="state.dialogDisplay"
      >
        <!-- @toggle-display="(e) => { state.dialogDisplay = e }"
        @toggleDisplay="(e) => { state.dialogDisplay = e }" -->
        test
      </mito-dialog>
    </main>
  </div>
</template>

<style>
.app {
  display: grid;
  grid-template-areas: 'header header' 'drawer main';
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr,
}

.button {
  display: flex;
}

.header {
  grid-area: header;
}
.drawer {
  grid-area: drawer;
}
.main {
  grid-area: main;
  padding: 10px;
}
</style>

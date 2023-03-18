import Mitorial from '@vue2'

const { Components } = Mitorial

export default {
  install: (app) => {
    Object.entries(Components).forEach(([key, value]) => {
      app.component(key, value);
    })
  }
}
import { App } from 'vue'
import Col from './Col.vue'

Col.install = function(app: App) {
  app.component(Col.name, Col)
}

export default Col

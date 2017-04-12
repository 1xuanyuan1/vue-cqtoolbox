import cqButtonGroup from './cqButtonGroup.vue'
import cqButtonGroupTheme from './cqButtonGroup.theme'

import { BUTTONGROUP } from '../../identifiers'

export default function install (Vue) {
  Vue.component(BUTTONGROUP, cqButtonGroup)
  Vue.cqtool.styles.push(cqButtonGroupTheme)
}

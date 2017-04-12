import CqCore from './core'

import CqSection from './components/section'

import CqButton from './components/button'
import CqButtonGroup from './components/buttonGroup'
import CqIcon from './components/fontIcon'

const options = {
  CqCore,
  CqSection,
  CqButton,
  CqButtonGroup,
  CqIcon
}

options.install =  (Vue) => {
  for (let component in options) {
    const componentInstaller = options[component]
    if (componentInstaller && component !== 'install') {
      Vue.use(componentInstaller)
    }
  }
}

export default options

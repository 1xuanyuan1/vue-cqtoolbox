import CqCore from './core'

import CqButton from './components/button'

const options = {
  CqCore,
  CqButton
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

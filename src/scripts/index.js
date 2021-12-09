import 'regenerator-runtime' /* for async await transpile */
import '../styles/minified/main-min.css'
import '../styles/minified/responsive-min.css'
import '../styles/minified/style-min.scss'
import '../scripts/components/app-bar.js'
import '../scripts/components/hero-element'
import '../../src/public/font-awesome.js'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import App from './views/app'
import swRegister from './utils/sw-register'

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#findresto')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})

const splash = document.querySelector('.splash')

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    splash.classList.add('display-none')
  }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then(registration => {
      console.log('SW registered: ', registration)
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError)
    })
  })
}

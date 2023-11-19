import { createApp } from 'vue'
import { createPinia } from 'pinia'

//Equivalent to adding bootstrap to the <head> of an html file. 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './style.css'

import App from './App.vue'


//Below is the default way to create the app.
//createApp(App).mount('#app')

// The below was created to allow the use of the store Pinia
const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

app.mount('#app')
//
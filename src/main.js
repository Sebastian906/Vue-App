//import './assets/main.css' // importa la hoja de estilos css denominada como main.css

import { createApp } from 'vue' // importa la función de createApp para hacer la aplicación desde 0
import App from './App.vue' // importa el componente App.vue

createApp(App).mount('#app') // crea la aplicación y la monta en el div con el id correspondiente (en este caso id="app")

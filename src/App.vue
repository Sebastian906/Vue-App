<script setup>
import { ref } from 'vue';

 // setup: Método que permite usar el script setup proporcionado por Vue 3
  let count = ref(0); // ref: Permite crear una variable reactiva
  
  function decrement() {
    count.value--;
  }
  
  function increment() {
    count.value++;
  }
</script>

<template> <!-- template: Contiene el HTML que se renderizará en el navegador -->
  <!-- <div v-html="msg"></div> -->
  <button @click="decrement()" :disabled="count === 0"> <!-- @click: Permite ejecutar una función al hacer clic en el elemento. Se deshabilita la función cuando el valor es 0 -->
    - 
  </button>
  
  {{ count }}
  
  <button @click="increment()"> 
    + 
  </button>
</template>

<style scoped> /* scoped: Permite que los estilos solo se apliquen al componente actual */

</style> 
<script setup> // setup: Método que permite usar el script setup proporcionado por Vue 3
  const msg = 'Hello Vue 3 + Vite';
  function saludar() {
    console.log('Hello');
  }
</script>

<template> <!-- template: Contiene el HTML que se renderizará en el navegador -->
  <h1>
    {{ msg }}
  </h1>
</template>

<style scoped> /* scoped: Permite que los estilos solo se apliquen al componente actual */

</style> 
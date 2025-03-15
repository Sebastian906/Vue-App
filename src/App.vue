<script setup> // setup: Método que permite usar el script setup proporcionado por Vue 3
  const atributos = {
    id: 'idPrueba',
    class: 'text-red',
    disabled: true
  }
</script>

<template> <!-- template: Contiene el HTML que se renderizará en el navegador -->
  <!-- <div v-html="msg"></div> -->
  <p v-bind="atributos">
    Hola Mundo
  </p>
  <button v-bind="atributos">
    Enviar
  </button>
</template>

<style scoped> /* scoped: Permite que los estilos solo se apliquen al componente actual */
  .text-red {
    color: red;
  }
</style> 
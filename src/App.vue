<template>
  <div id="app">
    <router-view></router-view>
    <div class="whatsapp-button">
      <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/whatsapp-brands-solid.svg" alt="WhatsApp" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      whatsappUrl: 'https://wa.me/558899496039'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.whatsapp-button img {
  width: 50px; /* Ajusta el tamaño del ícono según sea necesario */
  height: auto;
  filter: invert(36%) sepia(52%) saturate(5648%) hue-rotate(114deg) brightness(95%) contrast(89%);
}
</style>

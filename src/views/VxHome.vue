<template>
  <div>
    <CxHeader />
    <section class="hero">
      <div class="overlay"></div>
      <div class="content">
        <h1 class="hero-title">Bienvenido a Inca Kite</h1>
        <p class="hero-subtitle">
          La mejor escuela de kitesurf en Jericoacoara.
        </p>
        <router-link to="/services" class="cta">Ver Aulas de Kite</router-link>
      </div>
    </section>
    <CxFooter />
  </div>
</template>

<script>
import CxHeader from "@/components/CxHeader.vue";
import CxFooter from "@/components/CxFooter.vue";

export default {
  name: "VxHome",
  components: {
    CxHeader,
    CxFooter,
  },
};
</script>

<style scoped>
/* Estilos Mobile-First */
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 60px 20px; /* Ajusta el padding según necesites */
  background-image: url("@/assets/kite.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Filtro oscuro traslúcido */
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 2.5em; /* Tamaño adaptado para móviles */
  background: linear-gradient(to right, red, white, red); /* Colores de Perú */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.5em; /* Tamaño adaptado para móviles */
  font-weight: bold;
  background: linear-gradient(
    to right,
    green,
    yellow,
    blue,
    yellow,
    green
  ); /* Colores de Brasil */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 50px;
}

.cta {
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.cta:hover {
  background-color: #0056b3;
}

/* Estilos para pantallas más grandes */
@media (min-width: 768px) {
  .hero {
    flex-direction: row; /* En pantallas grandes, la dirección es en fila */
    padding: 100px 40px; /* Ajusta el padding para pantallas más grandes */
  }

  .hero-title {
    font-size: 4em; /* Tamaño más grande para pantallas grandes */
  }

  .hero-subtitle {
    font-size: 2.5em; /* Tamaño más grande para pantallas grandes */
  }
}
</style>

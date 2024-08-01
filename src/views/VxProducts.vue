<template>
  <div>
    <CxHeader />
    <section class="products">
      <div class="overlay"></div>
      <div class="content">
        <h2 class="products-title">Nuestros Kites</h2>
        <CxCarousel :services="kites" :autoplayDelay="3000" />
      </div>
    </section>
    <CxFooter />
  </div>
</template>

<script>
import CxHeader from '@/components/CxHeader.vue';
import CxFooter from '@/components/CxFooter.vue';
import CxCarousel from '@/components/CxCarousel.vue';

export default {
  name: 'VxProducts',
  components: {
    CxHeader,
    CxFooter,
    CxCarousel
  },
  data() {
    return {
      kites: [
        {
          title: "Kite Core XR6",
          description: "Un kite versátil y de alto rendimiento.",
          image: require("@/assets/kite.jpg"),
          whatsappNumber: "123456789"
        },
        {
          title: "Kite Core GTS5",
          description: "Para aquellos que buscan potencia y maniobrabilidad.",
          image: require("@/assets/kite.jpg"),
          whatsappNumber: "123456789"
        },
        {
          title: "Kite Core Nexus 2",
          description: "Ideal para condiciones de viento variadas.",
          image: require("@/assets/kite.jpg"),
          whatsappNumber: "123456789"
        },
      ],
    };
  }
}
</script>

<style scoped>
.products {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 20px; /* Ajustado para mobile-first */
  background-image: url('@/assets/kite-equipo.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Usar min-height para asegurar que cubra toda la pantalla */
  color: white;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
}

.products-title {
  font-size: 2em; /* Ajuste de tamaño para pantallas móviles */
  margin-bottom: 20px;
  color: white;
}

/* Media queries para pantallas más grandes */
@media (min-width: 768px) {
  .products-title {
    font-size: 3em;
  }
}

@media (min-width: 1024px) {
  .products-title {
    font-size: 4em;
  }
}
</style>

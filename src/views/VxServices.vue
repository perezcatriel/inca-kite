<template>
  <div>
    <CxHeader />
    <section class="services">
      <div class="overlay"></div>
      <div class="content">
        <h2 class="services-title">Nuestras Aulas de Kite</h2>
        <CxCarousel :services="services" autoplayDelay="3000" />
      </div>
    </section>
    <CxFooter />
  </div>
</template>

<script>
import CxHeader from "@/components/CxHeader.vue";
import CxFooter from "@/components/CxFooter.vue";
import CxCarousel from "@/components/CxCarousel.vue";

export default {
  name: "VxServices",
  components: {
    CxHeader,
    CxFooter,
    CxCarousel,
  },
  data() {
    return {
      services: [
        {
          title: "Clase Básica",
          description: "Aprende los fundamentos del kitesurf.",
          image: require("@/assets/kite.jpg"), // Ruta de la imagen para la Clase Básica
          whatsappNumber: "1234567890" // Número de WhatsApp para la Clase Básica
        },
        {
          title: "Clase Intermedia",
          description: "Mejora tus habilidades y técnicas.",
          image: require("@/assets/kite.jpg"), // Ruta de la imagen para la Clase Intermedia
          whatsappNumber: "1234567890" // Número de WhatsApp para la Clase Intermedia
        },
        {
          title: "Clase Avanzada",
          description: "Perfecciona tus maniobras y técnicas avanzadas.",
          image: require("@/assets/kite.jpg"), // Ruta de la imagen para la Clase Avanzada
          whatsappNumber: "1234567890" // Número de WhatsApp para la Clase Avanzada
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Estilos Mobile-First */
.services {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 60px 20px;
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
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.services-title {
  font-size: 2em;
  color: white;
  margin-bottom: 20px;
}

/* Estilos para pantallas más grandes */
@media (min-width: 768px) {
  .services {
    padding: 100px 40px;
  }

  .services-title {
    font-size: 3em;
  }
}
</style>

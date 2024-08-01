<template>
  <div>
    <CxHeader />
    <section class="about">
      <div class="overlay"></div>
      <div class="content">
        <div class="card">
          <h2 class="about-title">Sobre Inca Kite</h2>
          <div class="about-description">
            <p>
              Bienvenido a Inca Kite, el destino líder para el kitesurf en la
              espectacular Lagoa do Paraiso, Jericoacoara, Brasil.
            </p>
            <p>
              Nuestra escuela está dirigida por Roberto, un instructor de
              kitesurf originario del Perú, que ha dedicado más de 10 años a
              perfeccionar su arte. Tras vivir en Europa y Brasil, Roberto ha
              adquirido una perspectiva global y una maestría única en el
              deporte, persiguiendo los mejores vientos alrededor del mundo.
            </p>
            <p>
              En Inca Kite, ofrecemos clases personalizadas para todos los
              niveles, desde principiantes hasta expertos, adaptadas a tus
              necesidades y habilidades. Equipamos nuestras lecciones con los
              kites más avanzados de la marca Core, garantizando la máxima
              calidad y rendimiento en cada sesión.
            </p>
            <p>
              Únete a nosotros para experimentar la emoción del kitesurf en el
              entorno paradisíaco de Jericoacoara. ¡Con Inca Kite, tu aventura
              en el kitesurf alcanza nuevas alturas!
            </p>
          </div>
          <router-link to="/services" class="cta"
            >¡Reserva tu clase ahora!</router-link
          >
        </div>
      </div>
    </section>
    <CxFooter />
  </div>
</template>

<script>
import CxHeader from "@/components/CxHeader.vue";
import CxFooter from "@/components/CxFooter.vue";

export default {
  name: "VxAbout",
  components: {
    CxHeader,
    CxFooter,
  },
};
</script>

<style scoped>
/* Estilos Mobile-First */
.about {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 80px 20px; /* Aumento del padding para móviles */
  background-image: url("@/assets/kite-salto.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Asegura que la sección tenga al menos la altura de la ventana */
  color: white;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Filtro oscuro traslúcido */
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.card {
  background: rgba(
    255,
    255,
    255,
    0.9
  ); /* Fondo blanco traslúcido para la tarjeta */
  border-radius: 10px;
  padding: 20px; /* Aumento del padding en la tarjeta */
  max-width: 90%; /* Ancho máximo adaptado para móviles */
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.about-title {
  font-size: 2em; /* Tamaño adaptado para móviles */
  color: #333;
  margin-bottom: 15px;
}

.about-description {
  font-size: 1em; /* Tamaño adaptado para móviles */
  color: #555;
  line-height: 1.5;
}

.cta {
  padding: 10px 20px;
  margin-top: 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
}

.cta:hover {
  background-color: #0056b3;
}

/* Estilos para pantallas más grandes */
@media (min-width: 768px) {
  .about {
    padding: 100px 40px; /* Ajusta el padding para pantallas más grandes */
  }

  .card {
    max-width: 800px; /* Ancho máximo más grande para pantallas grandes */
    padding: 30px; /* Aumento del padding en la tarjeta */
  }

  .about-title {
    font-size: 2.5em; /* Tamaño más grande para pantallas grandes */
  }

  .about-description {
    font-size: 1.2em; /* Tamaño más grande para pantallas grandes */
  }
}
</style>

<template>
  <div>
    <CxHeader />
    <section class="about">
      <div class="overlay"></div>
      <div class="content">
        <div class="card">
          <h2 class="about-title">Sobre Inca Kite</h2>
          <p class="about-description">
            Bienvenido a Inca Kite, tu destino principal para el kitesurf en la idílica Lagoa do Paraiso en Jericoacoara, Brasil. Fundada y dirigida por Roberto, un experimentado instructor peruano con más de una década de experiencia en el deporte, nuestra escuela ofrece clases adaptadas a todos los niveles de habilidad. Además, ofrecemos los mejores kites de la marca Core, asegurando que tengas el equipo más avanzado para disfrutar al máximo de tu experiencia. ¡Únete a nosotros y experimenta la emoción del kitesurf en un entorno inigualable!
          </p>
          <router-link to="/services" class="cta">¡Reserva tu clase ahora!</router-link>
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
  padding: 60px 20px; /* Padding adaptado para móviles */
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
  background: rgba(0, 0, 0, 0.6); /* Filtro oscuro traslúcido */
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.card {
  background: rgba(255, 255, 255, 0.9); /* Fondo blanco traslúcido para la tarjeta */
  border-radius: 10px;
  padding: 15px;
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
    padding: 20px;
  }

  .about-title {
    font-size: 2.5em; /* Tamaño más grande para pantallas grandes */
  }

  .about-description {
    font-size: 1.2em; /* Tamaño más grande para pantallas grandes */
  }
}
</style>

<template>
  <div class="carousel">
    <button @click="prevSlide" class="carousel-button prev-button">‹</button>
    <div class="carousel-slides">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="carousel-slide"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div class="card">
          <img :src="service.image" alt="Kite Image" class="card-image" />
          <div class="card-content">
            <h3 class="card-title">{{ service.title }}</h3>
            <p class="card-description">{{ service.description }}</p>
            <a :href="`https://wa.me/${service.whatsappNumber}`" class="cta-button" target="_blank">
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-indicators">
      <span
        v-for="(service, index) in services"
        :key="index"
        :class="{ active: currentSlide === index }"
        class="indicator"
        @click="goToSlide(index)"
      ></span>
    </div>
    <button @click="nextSlide" class="carousel-button next-button">›</button>
  </div>
</template>

<script>
export default {
  name: 'CxCarousel',
  props: {
    services: {
      type: Array,
      required: true
    },
    autoplayDelay: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      currentSlide: 0,
      autoplay: null
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.services.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.services.length) % this.services.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    startAutoplay() {
      this.autoplay = setInterval(this.nextSlide, this.autoplayDelay);
    },
    stopAutoplay() {
      clearInterval(this.autoplay);
    }
  },
  mounted() {
    this.startAutoplay();
  },
  beforeUnmount() {
    this.stopAutoplay();
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.carousel-slides {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
}

.carousel-slide {
  min-width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 90%; /* Ancho de la tarjeta para pantallas pequeñas */
  max-width: 320px; /* Tamaño máximo de la tarjeta en dispositivos móviles */
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #333;
  margin: auto; /* Asegura que la tarjeta esté centrada */
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.card-content {
  margin-top: 10px;
}

.card-title {
  font-size: 1em; /* Tamaño de fuente para pantallas pequeñas */
  margin-bottom: 10px;
}

.card-description {
  font-size: 0.8em; /* Tamaño de fuente para pantallas pequeñas */
  margin-bottom: 15px;
}

.cta-button {
  display: inline-block;
  padding: 10px 15px;
  background: #007bff;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
}

.cta-button:hover {
  background: #0056b3;
}

.carousel-button {
  background: none;
  border: none;
  color: #007bff;
  font-size: 2.5em;
  cursor: pointer;
  z-index: 10;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

.carousel-indicators {
  position: absolute;
  bottom: 45%; /* Ajuste del indicador al pie de la foto */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 10;
}

.indicator {
  background: #007bff;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  cursor: pointer;
}

.indicator.active {
  background: #0056b3;
}

@media (min-width: 768px) {
  .card {
    width: 80%; /* Ancho de la tarjeta para pantallas más grandes */
    max-width: 400px; /* Tamaño máximo de la tarjeta en dispositivos más grandes */
    padding: 15px; /* Mayor relleno para pantallas más grandes */
  }

  .card-title {
    font-size: 1.2em; /* Tamaño de fuente para pantallas más grandes */
  }

  .card-description {
    font-size: 0.9em; /* Tamaño de fuente para pantallas más grandes */
  }

  .carousel-button {
    font-size: 5em; /* Tamaño de los botones para pantallas más grandes */
  }
}
</style>

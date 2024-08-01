<template>
  <div>
    <CxHeader />
    <section class="contact">
      <div class="overlay"></div>
      <div class="content">
        <h2 class="contact-title">Contacto</h2>
        <form @submit.prevent="submitForm">
          <input type="text" placeholder="Nombre" v-model="name" required />
          <input type="email" placeholder="Correo Electrónico" v-model="email" required />
          <textarea placeholder="Mensaje" v-model="message" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
    <CxFooter />
  </div>
</template>

<script>
import CxHeader from '@/components/CxHeader.vue'
import CxFooter from '@/components/CxFooter.vue'

export default {
  name: 'VxContact',
  components: {
    CxHeader,
    CxFooter
  },
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      const message = `Nombre: ${this.name}\nCorreo Electrónico: ${this.email}\nMensaje: ${this.message}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/+558899496039?text=${encodedMessage}`; // Reemplaza con tu número de teléfono
      window.open(whatsappUrl, '_blank');
    }
  }
}
</script>

<style scoped>
.contact {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10vh 5vw;
  background-image: url('@/assets/kite.jpg'); /* Asegúrate de que la imagen esté en la carpeta adecuada */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
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

.contact-title {
  font-size: 2rem; /* Ajuste de tamaño para pantallas móviles */
  color: white;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 90%;
  margin: 0 auto;
  align-items: center; /* Centrar el contenido del formulario */
}

input, textarea, button {
  margin-bottom: 10px;
  padding: 1rem;
  width: 100%;
  max-width: 400px; /* Ancho máximo para los campos del formulario y el botón */
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.8); /* Fondo blanco traslúcido */
  text-align: left;
}

textarea {
  resize: vertical; /* Permite redimensionar verticalmente el área de texto */
}

button {
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3; /* Color del botón al pasar el ratón */
}

@media (min-width: 768px) {
  .contact-title {
    font-size: 3rem; /* Tamaño de fuente más grande para pantallas más grandes */
  }

  form {
    max-width: 600px; /* Ancho máximo del formulario para pantallas más grandes */
  }

  input, textarea, button {
    font-size: 1rem; /* Tamaño de fuente mayor para pantallas más grandes */
    max-width: 100%; /* Asegurarse de que los campos del formulario y el botón no excedan el ancho del formulario */
  }
}
</style>

<template>
  <header class="header">
    <h1 class="title">
      <span class="inca">INCA </span>
      <span class="kite">KITE</span>
    </h1>
    <nav :class="{ 'nav-open': isMenuOpen }">
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/about">Sobre Inca Kite</router-link></li>
        <li><router-link to="/services">Aulas</router-link></li>
        <li><router-link to="/products">Productos</router-link></li>
        <li><router-link to="/contact">Contactame</router-link></li>
      </ul>
    </nav>
    <div class="menu-toggle" @click="toggleMenu">
      <span class="menu-icon">&#9776;</span> <!-- Icono de menú -->
    </div>
  </header>
</template>

<script>
export default {
  name: 'CxHeader',
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #000000;
  color: #FFFFFF;
  padding: 20px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  display: inline-block;
  font-size: 2em;
  margin: 0;
}

.inca {
  background: linear-gradient(to right, red, white, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.kite {
  background: linear-gradient(to right, green, yellow, blue, yellow, green);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.menu-toggle {
  display: block;
  cursor: pointer;
  font-size: 2em;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
}

.menu-icon {
  display: block;
}

.header nav {
  display: none; /* Oculta el menú por defecto en móvil */
  flex-direction: column; /* Menú en columna por defecto */
  width: 100%;
  position: absolute;
  top: 80px; /* Ajusta según el tamaño del icono y el padding */
  left: 0;
  background-color: #000000;
  z-index: 9;
}

.header nav.nav-open {
  display: flex; /* Muestra el menú cuando está abierto */
}

.header nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.header nav ul li {
  margin: 10px 0;
  font-size: 1.5em;
}

.header nav ul li a {
  color: #FFFFFF;
  text-decoration: none;
  text-align: center;
}

.header nav ul li a:hover {
  color: #FFFF00;
}

@media (min-width: 769px) {
  .header {
    padding: 20px;
    flex-direction: column; /* Mantiene la columna de elementos */
    justify-content: center;
    text-align: center;
  }

  .title {
    font-size: 2.5em;
  }

  .menu-toggle {
    display: none; /* Oculta el icono de menú en escritorio */
  }

  .header nav {
    display: flex; /* Muestra el menú en escritorio */
    flex-direction: row; /* Menú en fila */
    position: static; /* Resetea la posición para escritorio */
    width: auto;
    top: auto;
    left: auto;
    background: none; /* Sin fondo en escritorio */
  }

  .header nav ul {
    display: flex;
    flex-direction: row; /* Menú en fila */
    align-items: center; /* Alinea los elementos de la lista en el centro verticalmente */
    padding: 0;
    margin: 0;
  }

  .header nav ul li {
    margin: 0 15px;
    font-size: 1.2em;
  }
}
</style>

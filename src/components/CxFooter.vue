<template>
  <footer class="footer">
    <p>© 2024 Inca Kite. Todos los derechos reservados. </p>
    <p>Creado por <a href="https://datacraft.vercel.app" target="_blank" rel="noopener noreferrer">DataCraft</a>.</p>
  </footer>
</template>

<script>
export default {
  name: 'CxFooter'
}
</script>

<style scoped>
.footer {
  background-color: #000000;
  color: #FFFFFF;
  padding: 20px;
  text-align: center;
}

.footer a {
  color: #00FF00; /* Color verde para el enlace */
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>

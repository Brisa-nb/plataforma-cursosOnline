<template>
  <header class="header">
    <h1>Plataforma de Cursos Online</h1>

    <nav class="navbar">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/cursos">Cursos</RouterLink>
      <RouterLink to="/inscripciones">Inscripciones</RouterLink>
      <RouterLink to="/material">Material de apoyo</RouterLink>
      <RouterLink to="/certificaciones">Certificaciones</RouterLink>
      <RouterLink to="/contacto">Contacto</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  padding: 20px;
  text-align: center;
   background: #89b8ee;
   color:white;
}

.navbar {
display:flex;
font-family: Arial, sans-serif;
justify-content: center;
gap: 30px;
flex-wrap: wrap;
margin-top:20px;

}

.navbar a {
  text-decoration:none;
  color:white;
  font-weight:bold;
  padding: 8px 12px;
  border-radius: 8px;
}

.navbar a:hover {
background:white;
color: #89d8ee;
}
</style>
<template>
  <footer class="footer">

    <div>
      <h3>Plataforma de Cursos Online</h3>
      <p>
        Aprende, desarrolla tus habilidades y alcanza
        tus metas profesionales.
      </p>
    </div>

    <div>
      <h3>Enlaces</h3>
      <ul>
        <li><RouterLink to="/cursos">Cursos</RouterLink></li>
        <li><RouterLink to="/inscripciones">Inscripciones</RouterLink></li>
        <li><RouterLink to="/certificaciones">Certificaciones</RouterLink></li>
        <li><RouterLink to="/contacto">Contacto</RouterLink></li>
      </ul>
    </div>

    <div>
      <h3>Contacto</h3>
      <p>cursos@plataforma.com</p>
      <p>Mérida, Yucatán</p>
    </div>

    <p class="copyright">
      © 2026 Plataforma de Cursos Online
    </p>

  </footer>
</template>
<style scoped>
.footer {
  background: #1f2937;
  color: white;
  padding: 35px;
  margin-top: 40px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.footer ul {
  padding-left: 20px;
}

.footer a {
  color: white;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.copyright {
  grid-column: 1 / -1;
  text-align: center;
  border-top: 1px solid #6b7280;
  padding-top: 20px;
}

@media (max-width: 700px) {
  .footer {
    grid-template-columns: 1fr;
  }

  .copyright {
    grid-column: auto;
  }
}
</style>
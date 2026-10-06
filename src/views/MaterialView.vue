<script setup lang="ts">
import {
  cursoSeleccionado,
  duracionSeleccionada,
  inscrito
} from '../data/estadoCurso'
</script>

<template>
  <section class="material">

    <div v-if="!inscrito" class="bloqueado">
      <h2>🔒 Material de apoyo</h2>

      <p>
        Debes inscribirte a un curso para acceder
        al material de aprendizaje.
      </p>

      <RouterLink to="/cursos" class="boton">
        Explorar cursos
      </RouterLink>
    </div>

    <div v-else class="contenido">
      <div class="encabezado">
        <h2>Material del curso</h2>

        <h3>{{ cursoSeleccionado }}</h3>

        <p>
          Duración: {{ duracionSeleccionada }}
        </p>
      </div>

      <div class="modulos">

        <div class="modulo">
          <h3>📘 Módulo 1</h3>
          <p>Introducción al desarrollo web</p>
        </div>

        <div class="modulo">
          <h3>💻 Módulo 2</h3>
          <p>Fundamentos de HTML</p>
        </div>

        <div class="modulo">
          <h3>🎨 Módulo 3</h3>
          <p>Estilos con CSS</p>
        </div>

        <div class="modulo">
          <h3>⚙️ Módulo 4</h3>
          <p>Introducción a JavaScript</p>
        </div>

      </div>

      <div class="recursos">
        <h3>Recursos adicionales</h3>

        <p>
          Consulta documentación para complementar
          tu aprendizaje.
        </p>

        <a
          href="https://developer.mozilla.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar MDN Web Docs
        </a>
      </div>

    </div>

  </section>
</template>

<style scoped>
.material {
  padding: 30px;
}

.bloqueado,
.contenido {
  max-width: 1000px;
  margin: 30px auto;
  padding: 30px;
  background: whitesmoke;
  border: 1px solid #7cc5f6;
  border-radius: 16px;
}

.bloqueado {
  max-width: 600px;
  text-align: center;
}

.encabezado {
  margin-bottom: 25px;
}

.modulos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.modulo {
  background: white;
  border-radius: 12px;
  padding: 20px;
}

.recursos {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-top: 20px;
}

.boton,
.recursos a {
  display: inline-block;
  background: #7cc5f6;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

.boton:hover,
.recursos a:hover {
  background: #6288f1;
}

@media (max-width: 700px) {
  .material {
    padding: 20px;
  }

  .bloqueado,
  .contenido {
    padding: 20px;
  }

  .modulos {
    grid-template-columns: 1fr;
  }
}
</style>
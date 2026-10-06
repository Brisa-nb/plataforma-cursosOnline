<script setup lang="ts">
import { ref } from 'vue'
import CursoCard from '../components/CursosCard.vue'
import { cursos } from '../data/cursos'
import {
  cursoSeleccionado,
  duracionSeleccionada
} from '../data/estadoCurso'

const cursosSeleccionados = ref(0)

const seleccionarCurso = (nombre: string, duracion: string) => {
  cursoSeleccionado.value = nombre
  duracionSeleccionada.value = duracion
  cursosSeleccionados.value++
}
</script>

<template>
  <section class="cursos">

    <h2>Nuestros cursos</h2>

    <p>
      Explora nuestra oferta de cursos y encuentra el que mejor se adapte
      a tus intereses profesionales.
    </p>

    <p class="contador">
      Cursos seleccionados: {{ cursosSeleccionados }}
    </p>

    <div v-if="cursoSeleccionado" class="seleccion">
      <p>
        Curso seleccionado:
        <strong>{{ cursoSeleccionado }}</strong>
      </p>

      <RouterLink to="/inscripciones" class="continuar">
        Continuar con inscripción
      </RouterLink>
    </div>

    <div class="lista-cursos">

      <CursoCard
        v-for="curso in cursos"
        :key="curso.id"
        :nombre="curso.nombre"
        :descripcion="curso.descripcion"
        :duracion="curso.duracion"
        :demandado="curso.demandado"
        @seleccionar="seleccionarCurso(curso.nombre, curso.duracion)"
      />

    </div>

  </section>
</template>

<style scoped>
.cursos {
  padding: 30px;
}

.contador {
  font-weight: bold;
}

.seleccion {
  background: whitesmoke;
  border: 1px solid #7cc5f6;
  border-radius: 12px;
  padding: 15px 20px;
  margin: 20px 0;
}

.continuar {
  display: inline-block;
  background: #7cc5f6;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

.continuar:hover {
  background: #6288f1;
}

.lista-cursos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 900px) {
  .lista-cursos {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .cursos {
    padding: 20px;
  }

  .lista-cursos {
    grid-template-columns: 1fr;
  }
}
</style>
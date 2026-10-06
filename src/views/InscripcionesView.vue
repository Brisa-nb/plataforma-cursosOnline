<script setup lang="ts">
import { ref } from 'vue'
import {
  cursoSeleccionado,
  duracionSeleccionada,
  sesionIniciada,
  inscrito
} from '../data/estadoCurso'

const correo = ref('')
const contrasena = ref('')
const mensaje = ref('')

const iniciarSesion = () => {
  if (correo.value !== '' && contrasena.value !== '') {
    sesionIniciada.value = true
    mensaje.value = ''
  } else {
    mensaje.value = 'Completa el correo y la contraseña.'
  }
}

const confirmarInscripcion = () => {
  inscrito.value = true
}

const cerrarSesion = () => {
  sesionIniciada.value = false
  inscrito.value = false
  correo.value = ''
  contrasena.value = ''
}
</script>

<template>
  <section class="inscripciones">

    <div v-if="!cursoSeleccionado" class="aviso">
      <h2>Inscripciones</h2>

      <p>
        Primero debes seleccionar un curso para comenzar
        el proceso de inscripción.
      </p>

      <RouterLink to="/cursos" class="boton">
        Explorar cursos
      </RouterLink>
    </div>

    <div v-else-if="!sesionIniciada" class="login">
      <h2>Acceso a inscripciones</h2>

      <p>
        Inicia sesión para continuar con tu inscripción a:
      </p>

      <h3>{{ cursoSeleccionado }}</h3>

      <div class="formulario">
        <label for="correo">Correo electrónico</label>

        <input
          id="correo"
          v-model="correo"
          type="email"
          placeholder="correo@ejemplo.com"
        />

        <label for="contrasena">Contraseña</label>

        <input
          id="contrasena"
          v-model="contrasena"
          type="password"
          placeholder="Ingresa tu contraseña"
        />

        <p v-if="mensaje" class="mensaje">
          {{ mensaje }}
        </p>

        <button @click="iniciarSesion">
          Iniciar sesión
        </button>
      </div>
    </div>

    <div v-else class="contenido-inscripcion">

      <div class="encabezado-inscripcion">
        <div>
          <h2>Inscripción</h2>
          <p>Revisa la información de tu curso.</p>
        </div>

        <button class="cerrar" @click="cerrarSesion">
          Cerrar sesión
        </button>
      </div>

      <div class="informacion">

        <div class="tarjeta">
          <h3>Curso seleccionado</h3>

          <p>
            <strong>Curso:</strong>
            {{ cursoSeleccionado }}
          </p>

          <p>
            <strong>Duración:</strong>
            {{ duracionSeleccionada }}
          </p>
        </div>

        <div class="tarjeta">
          <h3>Requisitos</h3>

          <ul>
            <li>Contar con acceso a Internet.</li>
            <li>Tener un correo electrónico activo.</li>
            <li>Disponer de una computadora, tableta o teléfono.</li>
          </ul>
        </div>

        <div class="tarjeta">
          <h3>Proceso de inscripción</h3>

          <ol>
            <li>Selecciona el curso de tu interés.</li>
            <li>Inicia sesión en la plataforma.</li>
            <li>Confirma tu inscripción.</li>
            <li>Accede al material de apoyo.</li>
          </ol>
        </div>

      </div>

      <div v-if="!inscrito" class="confirmacion">
        <h3>Confirmar inscripción</h3>

        <p>
          Confirma que deseas inscribirte al curso
          {{ cursoSeleccionado }}.
        </p>

        <button @click="confirmarInscripcion">
          Confirmar inscripción
        </button>
      </div>

      <div v-else class="exito">
        <h3>✅ Inscripción realizada correctamente</h3>

        <p>
          Ya puedes acceder al material de
          {{ cursoSeleccionado }}.
        </p>

        <RouterLink to="/material" class="boton">
          Acceder al material
        </RouterLink>
      </div>

    </div>

  </section>
</template>

<style scoped>
.inscripciones {
  padding: 30px;
}

.aviso,
.login,
.contenido-inscripcion {
  max-width: 1000px;
  margin: 30px auto;
  padding: 30px;
  background: whitesmoke;
  border: 1px solid #7cc5f6;
  border-radius: 16px;
}

.aviso,
.login {
  max-width: 600px;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 25px;
}

.formulario label {
  font-weight: bold;
}

.formulario input {
  padding: 12px;
  border: 1px solid #bfc7d1;
  border-radius: 8px;
  font-size: 16px;
}

button,
.boton {
  display: inline-block;
  background: #7cc5f6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 11px 18px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

button:hover,
.boton:hover {
  background: #6288f1;
}

.mensaje {
  color: #b91c1c;
  font-weight: bold;
}

.encabezado-inscripcion {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.cerrar {
  white-space: nowrap;
}

.informacion {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 25px;
}

.tarjeta,
.confirmacion,
.exito {
  background: white;
  border-radius: 12px;
  padding: 20px;
}

.tarjeta li {
  margin: 8px 0;
}

.confirmacion,
.exito {
  margin-top: 20px;
}

@media (max-width: 700px) {
  .inscripciones {
    padding: 20px;
  }

  .aviso,
  .login,
  .contenido-inscripcion {
    padding: 20px;
  }

  .informacion {
    grid-template-columns: 1fr;
  }

  .encabezado-inscripcion {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
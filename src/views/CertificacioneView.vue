<template>
  <section class="certificaciones">

    <div class="contenedor">

      <div class="introduccion">
        <h2>Certificaciones</h2>

        <p>
          Al completar satisfactoriamente un curso podrás obtener
          una certificación digital que reconoce los conocimientos
          y habilidades adquiridos.
        </p>
      </div>

      <div class="contenido">

        <div class="informacion">
          <h3>¿Qué incluye tu certificación?</h3>

          <ul>
            <li>Nombre del estudiante.</li>
            <li>Nombre del curso completado.</li>
            <li>Duración del curso.</li>
            <li>Fecha de finalización.</li>
            <li>Constancia digital.</li>
          </ul>
        </div>

        <div class="certificado">
          <div class="icono">🎓</div>

          <h3>Certificado digital</h3>

          <p>
            Obtén una constancia al finalizar tu curso
            y reconoce tus nuevas habilidades.
          </p>

          <span>Plataforma de Cursos Online</span>
        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>
.certificaciones {
  padding: 30px;
}

.contenedor {
  max-width: 1000px;
  margin: 30px auto;
  padding: 30px;
  background: whitesmoke;
  border: 1px solid #7cc5f6;
  border-radius: 16px;
}

.introduccion {
  margin-bottom: 25px;
}

.contenido {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.informacion,
.certificado {
  background: white;
  border-radius: 12px;
  padding: 25px;
}

.informacion li {
  margin: 10px 0;
}

.certificado {
  text-align: center;
  border: 2px solid #7cc5f6;
}

.icono {
  font-size: 50px;
  margin-bottom: 10px;
}

.certificado span {
  display: inline-block;
  margin-top: 15px;
  color: #6288f1;
  font-weight: bold;
}

@media (max-width: 700px) {
  .certificaciones {
    padding: 20px;
  }

  .contenedor {
    padding: 20px;
  }

  .contenido {
    grid-template-columns: 1fr;
  }
}
</style>
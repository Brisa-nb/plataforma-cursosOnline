<template>
  <section class="contacto">

    <div class="contenedor">

      <div class="introduccion">
        <h2>Contacto</h2>

        <p>
          Comunícate con nosotros para recibir más información
          sobre nuestros cursos y servicios.
        </p>
      </div>

      <div class="contenido">

        <div class="tarjeta">
          <div class="icono">💬</div>

          <h3>Información de contacto</h3>

          <p>
            ✉️ <strong>Correo:</strong>
            cursos@plataforma.com
          </p>

          <p>
            📞 <strong>Teléfono:</strong>
            999 514 1060
          </p>

          <p>
            📍 <strong>Ubicación:</strong>
            Mérida, Yucatán
          </p>
        </div>

        <div class="tarjeta seguridad">
          <div class="icono">🔒</div>

          <h3>Seguridad y privacidad</h3>

          <p>
            Protegemos la información personal de nuestros usuarios
            y promovemos el uso seguro de nuestra plataforma.
          </p>

          <ul>
            <li>Protección de datos personales.</li>
            <li>Acceso seguro a la plataforma.</li>
            <li>Privacidad de la información del usuario.</li>
          </ul>
        </div>

      </div>

      <hr class="separador">

      <p class="mensaje-final">
        Nuestro equipo está disponible para ayudarte durante
        tu proceso de aprendizaje.
      </p>

    </div>

  </section>
</template>

<style scoped>
.contacto {
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

.tarjeta {
  background: white;
  border-radius: 12px;
  padding: 25px;
}

.seguridad {
  border: 1px solid #7cc5f6;
}

.icono {
  font-size: 40px;
  margin-bottom: 10px;
}

.tarjeta li {
  margin: 8px 0;
}

.separador {
  border: none;
  border-top: 1px solid #bfc7d1;
  margin: 30px 0 20px;
}

.mensaje-final {
  text-align: center;
  color: #4b5563;
}

@media (max-width: 700px) {
  .contacto {
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
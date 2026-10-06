<template>
  <section class="inicio">

    <div class="presentacion">
      <div>
        <h2>Aprende a tu ritmo</h2>

        <p>
          Desarrolla nuevas habilidades con cursos en línea diseñados
          para ayudarte a crecer académica y profesionalmente.
        </p>

        <RouterLink to="/cursos" class="boton">
          Explorar cursos
        </RouterLink>
      </div>

      <img
        src="/images/cursos-online.jpg"
        alt="Estudiante tomando un curso en línea"
      />
    </div>

   

    <section class="empresas">
      <h2>Empresas afiliadas</h2>

      <p>
        Colaboramos con empresas y organizaciones que impulsan
        el aprendizaje y desarrollo profesional.
      </p>

     
                    <div class="lista-empresas">

                <span>
                    <img
                    src="https://www.google.com/s2/favicons?domain=google.com&sz=128"
                    alt="Google"
                    />
                    Google
                </span>

                <span>
                    <img
                    src="https://www.google.com/s2/favicons?domain=microsoft.com&sz=128"
                    alt="Microsoft"
                    />
                    Microsoft
                </span>

                <span>
                    <img
                    src="https://www.google.com/s2/favicons?domain=ibm.com&sz=128"
                    alt="IBM"
                    />
                    IBM
                </span>

                <span>
                    <img
                    src="https://www.google.com/s2/favicons?domain=cisco.com&sz=128"
                    alt="Cisco"
                    />
                    Cisco
                </span>

                </div>
     
    </section>

  

    <section class="casos">
      <h2>Casos de éxito</h2>

      <div class="caso">
        <h3>Ana Martínez</h3>
        <p>
          Después de completar el curso de Desarrollo Web, Ana fortaleció
          sus habilidades y comenzó a desarrollar sus propios proyectos.
        </p>
      </div>

      <div class="caso">
        <h3>Carlos López</h3>
        <p>
          Gracias al curso de Bases de Datos, Carlos amplió sus conocimientos
          de SQL y mejoró su perfil profesional.
        </p>
      </div>
    </section>

   

    <section class="videos">
      <h2>Videos recomendados</h2>

      <p>
        Consulta estos recursos para complementar tu aprendizaje.
      </p>
        <div class="video-card">
            <h3>Introducción al desarrollo web</h3>
            <p>Conoce los conceptos básicos del desarrollo web.</p>
           <a href="https://youtu.be/BOVXMbwJA08?si=PSe0eYWx1TrQADGX"
            target="_blank" 
            rel="noopener noreferrer">
            Ver video
            </a>
        </div>

        <div class="video-card">
            <h3>Aprende Programación desde cero</h3>
            <p>Conoce los conceptos básicos de la programación</p>
            <a href="https://youtu.be/smKYeXoMvyc?si=brfJkMr_f13FajTY"
            target="_blank" rel="noopener noreferrer">
            Ver video
        </a>
        </div>

        <div class="video-card">
            <h3>Consejos para estudiar en línea</h3>
            <p>Estrategias para aprovechar mejor las clases en línea</p>
            <a href="https://youtu.be/YYtv1qC-eTM?si=e1Q1icwDr7bU1hPr"
            target="_blank" 
            rel="noopener noreferrer">
            Ver video
            </a>
        </div>


        


    </section>

  </section>
</template>

<style scoped>
.inicio {
  padding: 30px;
}

.presentacion {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.presentacion img {
  width: 45%;
  max-width: 500px;
  border-radius: 16px;
}

.boton {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 18px;
  background: #7cc5f6;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

.boton:hover {
  background: #6288f1;
}

/* Secciones principales */

.empresas,
.casos,
.videos {
  background: whitesmoke;
  border: 1px solid #7cc5f6;
  border-radius: 16px;
  padding: 25px;
  margin: 25px 0;
}

/* Empresas afiliadas */

.lista-empresas {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.lista-empresas span {
  background: white;
  padding: 12px 18px;
  border-radius: 12px;
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 10px;

  min-width: 150px;
  height: 70px;
}

.lista-empresas img {
  width: 45px;
  height: 45px;
  object-fit: contain;
}

/* Casos de éxito */

.caso {
  background: white;
  border-radius: 12px;
  padding: 18px;
  margin: 15px 0;
}

/* Videos */

.video-card {
  margin: 15px 0;
  padding: 20px;
  border: 1px solid #7cc5f6;
  border-radius: 12px;
  background: white;
}

.video-card a {
  color: #6288f1;
  font-weight: bold;
  text-decoration: none;
}

.video-card a:hover {
  text-decoration: underline;
}

/* Responsive */

@media (max-width: 700px) {
  .inicio {
    padding: 20px;
  }

  .presentacion {
    flex-direction: column;
    text-align: center;
  }

  .presentacion img {
    width: 100%;
  }

  .lista-empresas {
    justify-content: center;
  }

  .lista-empresas span {
    width: 100%;
  }
}
</style>
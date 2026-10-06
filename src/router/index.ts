import { createRouter, createWebHistory } from 'vue-router'

import InicioView from '../views/InicioView.vue'
import CursosView from '../views/CursosView.vue'
import ContactoView from '../views/ContactoView.vue'
import InscripcionesView from '../views/InscripcionesView.vue'
import MaterialView from '../views/MaterialView.vue'
import CertificacionesView from '../views/CertificacioneView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView,
    },
    {
      path: '/cursos',
      name: 'cursos',
      component: CursosView,
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView,
    },

    {
      path: '/inscripciones',
      name: 'inscripciones',
      component: InscripcionesView,
    },
    {
      path: '/material',
      name: 'material',
      component: MaterialView,
    },
    {
      path: '/certificaciones',
      name: 'certificaciones',
      component: CertificacionesView,
    },
  ],
})

export default router
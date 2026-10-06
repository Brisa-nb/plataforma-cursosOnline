<script setup lang="ts">
defineProps<{
  nombre: string
  descripcion: string
  duracion: string
  demandado: boolean
}>()
const emit = defineEmits(['seleccionar'])
</script>

<template>
  <article class="curso-card">

    <span v-if="demandado" class="destacado">
      🔥 Más demandado
    </span>

    <h3>{{ nombre }}</h3>

    <p>{{ descripcion }}</p>

    <p>
      <strong>Duración:</strong> {{ duracion }}
    </p>

        <button
    class="boton-inscribir"
    @click="emit('seleccionar')"
    >
    Seleccionar curso
    </button>
    

  </article>
</template>

<style scoped>
.curso-card {
  border: 1px solid #7cc5f6;
  border-radius: 12px;
  padding: 20px;
  background: whitesmoke;
  box-shadow: 0 4px 10px #6288f1dd;
}

.curso-card:hover {
  transform: translateY(-5px);
}

.destacado {
  font-weight: bold;
  color:#7cc5f6;
}

.boton-inscribir {
  background: #7cc5f6;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.boton-inscribir:hover {
  background: #6288f1;
}
</style>
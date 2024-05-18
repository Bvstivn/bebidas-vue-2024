<template>
  <header class="bg-slate-800" :class="{ header: paginaInicio }">
    <div class="mx-auto container px-5 py-16">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink :to="{ name: 'inicio' }">
            <img class="w-32" src="/img/logo.svg" alt="logotipo" />
          </RouterLink>
        </div>
        <nav class="flex gap-4 text-white">
          <RouterLink
            :to="{ name: 'inicio' }"
            class=" font-bold uppercase"
            active-class="text-orange-500"
            >Inicio</RouterLink
          >

          <RouterLink
            :to="{ name: 'favoritos' }"
            class=" font-bold uppercase"
            active-class="text-orange-500"
            >Favoritos</RouterLink
          >
        </nav>
      </div>

      <form
        v-if="paginaInicio"
        class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
        @submit.prevent="handleSubmit"
      >
        <div class="space-y-4">
          <label
            for="ingrediente"
            class="block text-white uppercase font-extrabold text-lg"
          >
            Nombre o Ingredientes
          </label>
          <input
            id="ingrediente"
            class="p-3 w-full focus:outline-none"
            type="text"
            placeholder="Nombre Ingrediente: ej. Vodka, Tequila, etc"
            v-model="bebidas$.busqueda.nombre"
          />
        </div>

        <div class="space-y-4">
          <label
            for="categoria"
            class="block text-white uppercase font-extrabold text-lg"
          >
            Categoria
          </label>
          <select id="categoria" class="p-3 w-full focus:outline-none" v-model="bebidas$.busqueda.categoria">
            <option value="">-- Seleccione --</option>
            <option
              v-for="categoria in bebidas$.categorias"
              :key="categoria.strCategory"
              :value="categoria.strCategory"
            >
              {{ categoria.strCategory }}
            </option>
          </select>
        </div>

        <input
          class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
          type="submit"
          value="Buscar Recetas"
        />
      </form>
    </div>
  </header>
</template>

<script setup>
//Vue
import { computed } from "vue";
//VueRouter
import { RouterLink, useRoute } from "vue-router";
//Stores
import { useBebidasStore } from "../stores/bebidas";
import { useNotificacionStore } from "../stores/notificaciones";

//Stores
const bebidas$ = useBebidasStore();
const notificacion$ = useNotificacionStore();

//Data
const route = useRoute();

//Computed
const paginaInicio = computed(() => route.name === "inicio");

//Methods
const handleSubmit = () => {
  if(Object.values(bebidas$.busqueda).includes('')){
    notificacion$.texto = 'Todos los campos son obligatorios';
    notificacion$.mostrar = true;
    notificacion$.error = true;
    return
  }

  bebidas$.obtenerRecetas();
}

</script>

<style scoped>
.header {
  background-image: url("/img/bg.jpg");
  background-size: cover;
  background-position: center;
}
</style>

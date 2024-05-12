<template>
  <div class="border shadopw-lg">
    <div class="overflow-hidden">
      <img class="hover:scale-125 transition-transform hover:rotate-2" :src="receta.strDrinkThumb" :alt="'Imagen de: ' + receta.strDrink" />
    </div>
    <div class="p-5">
      <h2 class="text-2xl truncate font-extrabold">{{ receta.strDrink }}</h2>
        <button class="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg" type="button" @click="bebidas$.seleccionarBebida(receta.idDrink)">Ver Receta</button>
    </div>
  </div>
</template>

<script setup>
//Stores
import { useBebidasStore } from "../stores/bebidas";

//Definiciones
defineProps({
  receta: {
    type: Object,
    required: true,
  },
});

//Stores
const bebidas$ = useBebidasStore();
</script>

<template>
    <h1 class="text-6xl font-extrabold">Recetas</h1>

    <p v-if="bebidas$.noRecetas" class="my-10 text-center text-2xl">No hay resultados, utiliza el formulario para buscar</p>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
        <Receta v-for="receta in bebidas$.recetas" :receta="receta" :key="receta.idDrink" />
    </div>
</template>

<script setup>
//Stores
import { useBebidasStore } from "../stores/bebidas";
//Components
import Receta from "@/components/Receta.vue";

//Stores
const bebidas$ = useBebidasStore();
</script>
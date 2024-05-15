<template>
    <h1 class="text-6xl font-extrabold">Favoritos</h1>

    <p v-if="favoritos$.noFavoritos" class="my-10 text-center text-2xl">No hay Favoritos</p>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
        <Receta v-for="receta in favoritos$.favoritos" :receta="receta" :key="receta.idDrink" />
    </div>
</template>

<script setup>
//Components
import Receta from "@/components/Receta.vue";
//Stores
import { useFavoritosStore } from "../stores/favoritos";

//Stores
const favoritos$ = useFavoritosStore();

</script>
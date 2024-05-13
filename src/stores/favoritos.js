//Vue
import { ref, watch, onMounted } from "vue";
//Pinia
import { defineStore } from "pinia";
//Stores
import { useBebidasStore } from "./bebidas";

export const useFavoritosStore = defineStore('favoritos', () => {

    //Data
    const favoritos = ref([]);

    //Stores
    const bebidas$ = useBebidasStore();

    //Watch
    watch(favoritos, () => {
        sincronizarLocalStorage();
    },{
        deep: true
    });

    //onMounted

    //Methods
    const sincronizarLocalStorage = () => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
    }
    
    const handleClickFavorito = () => {
        favoritos.value.push(bebidas$.receta);
    }

    return{
        handleClickFavorito
    }
});
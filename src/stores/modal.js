//Pinia
import { defineStore } from "pinia";
//Vue
import { ref, computed } from "vue";
//Stores
import { useFavoritosStore } from "./favoritos";
import { useBebidasStore } from "./bebidas";

export const useModalStore = defineStore('modal', () => {
    
    //Data
    const modal = ref(false);

    //Stores
    const favoritos$ = useFavoritosStore();
    const bebidas$ = useBebidasStore();

    //Computed
    const textoBoton = computed(() => favoritos$.existeFavorito(bebidas$.receta.idDrink) ? 'Eliminar de favoritos' : 'Agregar favorito' );

    //Methods
    function handleClickModal(){
        modal.value = !modal.value;
    }

    return{
        modal,
        handleClickModal,
        textoBoton
    }
});
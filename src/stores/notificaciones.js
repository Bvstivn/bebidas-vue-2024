//Vue
import { ref } from "vue";
//Pinia
import { defineStore } from "pinia";

export const useNotificacionStore = defineStore('notificacion', () => {

    const texto = ref('');
    const error = ref(false);
    const mostrar = ref(false);

    function $reset(){
        texto.value = '';
        error.value = false;
        mostrar.value = false;
    }
    
    return{
        texto,
        error,
        mostrar,
        $reset
    }
})
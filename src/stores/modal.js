//Pinia
import { defineStore } from "pinia";
//Vue
import { ref } from "vue";

export const useModalStore = defineStore('modal', () => {
    
    const modal = ref(false);

    function handleClickModal(){
        modal.value = !modal.value;
    }

    return{
        modal,
        handleClickModal
    }
});
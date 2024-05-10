//Pinia
import { defineStore } from "pinia";
//Vue
import { ref, onMounted } from "vue";
//Axios
import axios from "axios";

export const useBebidasStore = defineStore('bebidas', () => {
    const categorias = ref([]);

    onMounted( async () => {
        const {data: drinks} = await axios('www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        categorias.value = drinks
    });

    return{
        categorias
    }
});
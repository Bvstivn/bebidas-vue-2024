//Pinia
import { defineStore } from "pinia";
//Vue
import { ref, onMounted, reactive } from "vue";
//Services
import APIService from "@/services/APIService";
//Stores
import { useModalStore } from "../stores/modal";

export const useBebidasStore = defineStore('bebidas', () => {

    //Stores
    const modal$ = useModalStore();

    const categorias = ref([]);
    const busqueda = reactive({
        nombre: '',
        categoria: '',
    });
    const recetas = ref([]);
    const receta = ref({});

    onMounted( async () => {
        const {data: drinks} = await APIService.obtenerCategorias();
        categorias.value = drinks;
    });

    async function obtenerRecetas(){
        const {data: {drinks}} = await APIService.buscarRecetas();
    }

    async function seleccionarBebida(id){
        const {data: {drinks}} = await APIService.buscarReceta(id);
        receta.value = drinks[0];
        modal$.handleClickModal();
    }

    return{
        categorias,
        busqueda,
        recetas,
        receta,
        obtenerRecetas,
        seleccionarBebida
    }
});
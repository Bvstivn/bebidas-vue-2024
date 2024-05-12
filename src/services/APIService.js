//Lib
import api from "@/lib/axios";

export default {
    obtenerCategorias(){
        return api('/list.php?c=list');
    },
    buscarRecetas(busqueda){
        return api(`/filter.php?c=${busqueda.categoria}&i=${busqueda.nombre}`);
    },
    buscarReceta(id){
        return api(`lookup.php?i=${id}`);
    }
}
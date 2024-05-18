//Vue
import { ref, watch, onMounted, computed } from "vue";
//Pinia
import { defineStore } from "pinia";
//Stores
import { useBebidasStore } from "./bebidas";
import { useModalStore } from "./modal";
import { useNotificacionStore } from "./notificaciones";

export const useFavoritosStore = defineStore("favoritos", () => {
  //Data
  const favoritos = ref([]);

  //Stores
  const bebidas$ = useBebidasStore();
  const modal$ = useModalStore();
  const notificacion$ = useNotificacionStore();

  //Watch
  watch(
    favoritos,
    () => {
      sincronizarLocalStorage();
    },
    {
      deep: true,
    }
  );

  //onMounted
  onMounted(() => {
    favoritos.value = JSON.parse(localStorage.getItem("favoritos")) ?? [];
  });

  //Methods
  function sincronizarLocalStorage() {
    localStorage.setItem("favoritos", JSON.stringify(favoritos.value));
  }

  function existeFavorito() {
    const favoritosLocalStorage =
      JSON.parse(localStorage.getItem("favoritos")) ?? [];
    return favoritosLocalStorage.some((favorito) => favorito.idDrink === id);
  }

  function eliminarFavorito() {
    favoritos.value = favoritos.value.filter(
      (favorito) => favorito.idDrink !== bebidas$.receta.idDrink
    );
    notificacion$.mostrar = true;
    notificacion$.texto = "Eliminado de favoritos";
    setTimeout(() => {
      notificacion$.$reset();
    }, 3000);
  }

  function agregarFavorito() {
    favoritos.value.push(bebidas$.receta);
    notificacion$.mostrar = true;
    notificacion$.texto = "Se agregó a favoritos";
    setTimeout(() => {
      notificacion$.$reset();
    }, 3000);
  }

  function handleClickFavorito() {
    if (existeFavorito(bebidas$.receta.idDrink)) {
      eliminarFavorito();
      modal$.modal = false;
    } else {
      favoritos.value.push(bebidas$.receta);
      modal$.modal = false;
    }
  }

  const noFavoritos = computed(() => favoritos.value.length === 0);

  return {
    favoritos,
    noFavoritos,
    handleClickFavorito,
    existeFavorito,
    agregarFavorito,
  };
});

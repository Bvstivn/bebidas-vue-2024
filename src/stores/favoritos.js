//Vue
import { ref, watch, onMounted } from "vue";
//Pinia
import { defineStore } from "pinia";
//Stores
import { useBebidasStore } from "./bebidas";
import { useModalStore } from "./modal";

export const useFavoritosStore = defineStore("favoritos", () => {
  //Data
  const favoritos = ref([]);

  //Stores
  const bebidas$ = useBebidasStore();
  const modal$ = useModalStore();

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

  function eliminarFavorito(){
    favoritos.value = favoritos.value.filter(favorito => favorito.idDrink !== bebidas$.receta.idDrink);
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

  return {
    favoritos,
    handleClickFavorito,
    existeFavorito,
  };
});

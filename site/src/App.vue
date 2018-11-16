<template>
	<div class="corpo">
    <menu-lateral id="meuMenu">
    </menu-lateral>
	</div>
</template>

<script>
import MenuLateral from "./components/shared/menu-lateral/MenuLateral.vue";

export default {
  components: {
    "menu-lateral": MenuLateral
  },
  data() {
    return {
      titulo: "Minha primeira SPA"
    };
  },

  created() {
    //utilizando o VueResource $http
    // this.$http
    //   .get("http://localhost:3000/menu")
    //   .then(response => response.json())
    //   .then(lista => (this.listaMenu = lista), err => console.log(err));
  }
};
</script>

<style lang="scss">
body {
  background-color: rgba(255, 255, 255, 1);
  margin: 0 auto;
  padding: 0;
}
.corpo {
  font-family: Helvetica;
}
</style>

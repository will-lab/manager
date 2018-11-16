<template>
    <ul class="menu-lateral" :id="id">
      <li class="item-menu-lateral" v-for="menu of listaMenu" :key="menu.nome">
        <item-menu-lateral :texto="menu.nome" :link="menu.link"></item-menu-lateral>
      </li>
    </ul>
</template>

<script>
import ItemMenuLateral from "./ItemMenuLateral.vue";

export default {
  props: ["id"],
  
  data() {
    return {
      listaMenu: []
    };
  },
  components: {
    "item-menu-lateral": ItemMenuLateral
  },
  created() {
    this.$http
      //utilizando o VueResource $http
      .get("http://localhost:3000/menu")
      .then(response => response.json())
      .then(lista => (this.listaMenu = lista), err => console.log(err));
  }
};

//     function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
// }

// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft= "0";
// }
</script>

<style>
.menu-lateral {
  margin: 0 auto;
  padding: 0;
  border-collapse: collapse;
}

.item-menu-lateral {
  width: 200px;
  height: 40px;
  line-height: 40px;
  
  border: 2px solid rgba(255,255,255, 1);
border-collapse: collapse;

  background-color: black;
  list-style: none;

  
}
</style>
